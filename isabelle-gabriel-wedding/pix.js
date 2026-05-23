/**
 * Utilitário para Geração de Payloads Pix (Padrão EMV BR Code do Banco Central)
 */
const PixGenerator = {
  // Função para calcular o CRC16 CCITT-FALSE
  calculateCRC16(str) {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      crc ^= (code << 8);
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ 0x1021;
        } else {
          crc = crc << 1;
        }
      }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
  },

  // Gera o payload Pix
  generatePayload({ key, amount, description, merchantName, merchantCity }) {
    // 1. Payload Format Indicator
    const pfi = "000201";
    
    // 2. Point of Initiation Method: 11 (estático com valor dinâmico)
    const poi = "010211";
    
    // 3. Merchant Account Information - Pix (ID 26)
    const gui = "0014br.gov.bcb.pix";
    const keyField = `01${key.length.toString().padStart(2, '0')}${key}`;
    
    // Descrição opcional da transação
    let infoAdicional = "";
    if (description) {
      // Normaliza para retirar acentos que quebram o padrão
      const cleanDesc = description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 25);
      infoAdicional = `02${cleanDesc.length.toString().padStart(2, '0')}${cleanDesc}`;
    }
    
    const merchantAccountContent = `${gui}${keyField}${infoAdicional}`;
    const merchantAccount = `26${merchantAccountContent.length.toString().padStart(2, '0')}${merchantAccountContent}`;
    
    // 4. Merchant Category Code: 52040000 (padrão)
    const mcc = "52040000";
    
    // 5. Transaction Currency: 5303986 (BRL)
    const currency = "5303986";
    
    // 6. Transaction Amount (ID 54)
    let amountField = "";
    if (amount) {
      const formattedAmount = parseFloat(amount).toFixed(2);
      amountField = `54${formattedAmount.length.toString().padStart(2, '0')}${formattedAmount}`;
    }
    
    // 7. Country Code: 5802BR (ID 58)
    const country = "5802BR";
    
    // 8. Merchant Name (ID 59)
    // Remove acentos e limita a 25 caracteres
    const cleanName = merchantName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 25);
    const nameField = `59${cleanName.length.toString().padStart(2, '0')}${cleanName}`;
    
    // 9. Merchant City (ID 60)
    // Remove acentos e limita a 15 caracteres
    const cleanCity = merchantCity.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 15);
    const cityField = `60${cleanCity.length.toString().padStart(2, '0')}${cleanCity}`;
    
    // 10. Additional Data Field Template (ID 62)
    // Usamos o transaction ID *** que delega a geração do ID ao banco do pagador (estático padrão)
    const txId = "0503***";
    const additionalData = `62${txId.length.toString().padStart(2, '0')}${txId}`;
    
    // Junta todas as partes para montar o código pré-CRC
    let payload = `${pfi}${poi}${merchantAccount}${mcc}${currency}${amountField}${country}${nameField}${cityField}${additionalData}6304`;
    
    // Calcula o CRC16 final e concatena
    const crc = this.calculateCRC16(payload);
    return payload + crc;
  }
};

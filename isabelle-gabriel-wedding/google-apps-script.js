/**
 * GOOGLE APPS SCRIPT - API do Site de Casamento (Isabelle & Gabriel)
 * 
 * INSTRUÇÕES DE INSTALAÇÃO:
 * 1. Acesse o Google Planilhas (https://sheets.google.com) e crie uma nova planilha vazia.
 * 2. Renomeie a planilha para "Controle de Casamento - Isabelle e Gabriel".
 * 3. No menu superior, clique em Extensões > Apps Script.
 * 4. Apague todo o código existente no editor e cole este script.
 * 5. Clique no ícone de disquete para salvar o projeto.
 * 6. No canto superior direito, clique em "Implantar" > "Nova implantação".
 * 7. Clique na engrenagem ao lado de "Selecionar tipo" e escolha "Aplicativo Web".
 * 8. Preencha as configurações:
 *    - Descrição: API do Casamento
 *    - Executar como: Você (seu e-mail)
 *    - Quem tem acesso: Qualquer pessoa (isso é CRÍTICO para o formulário do site conseguir enviar dados).
 * 9. Clique em "Implantar". Copie a URL gerada (URL do aplicativo web) e cole-a no arquivo `config.js` do seu site.
 * 10. Na primeira execução, o Google pedirá autorização para acessar sua planilha. Dê as permissões solicitadas.
 */

// Responde a requisições do tipo POST (envio de formulários)
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action; // 'rsvp', 'gift', 'guestbook'
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    if (action === 'rsvp') {
      return salvarRSVP(sheet, data);
    } else if (action === 'gift') {
      return salvarPresente(sheet, data);
    } else if (action === 'guestbook') {
      return salvarRecado(sheet, data);
    } else {
      return responderErro("Ação inválida");
    }
  } catch (error) {
    return responderErro(error.toString());
  }
}

// Responde a requisições GET (leitura de dados - ex: para listar os recados e presentes já comprados)
function doGet(e) {
  try {
    const action = e.parameter.action;
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    if (action === 'get_guestbook') {
      return listarRecados(sheet);
    } else if (action === 'get_gifts') {
      return listarPresentesReservados(sheet);
    } else {
      return responderJSON({ status: "success", message: "Conexão ativa! API de Casamento rodando com sucesso." });
    }
  } catch (error) {
    return responderErro(error.toString());
  }
}

// Salva dados de RSVP
function salvarRSVP(spreadsheet, data) {
  let sheet = spreadsheet.getSheetByName("RSVP");
  if (!sheet) {
    sheet = spreadsheet.insertSheet("RSVP");
    sheet.appendRow(["Data Cadastro", "Nome", "Status", "E-mail", "Telefone", "Acompanhantes (Adultos)", "Acompanhantes (Crianças)", "Restrições Alimentares", "Mensagem"]);
    formatarCabecalho(sheet);
  }
  
  const timestamp = new Date();
  sheet.appendRow([
    timestamp,
    data.name,
    data.confirmed ? "Confirmado" : "Não Comparecerá",
    data.email || "",
    data.phone || "",
    data.adultsCount || 0,
    data.childrenCount || 0,
    data.dietaryRestrictions || "",
    data.message || ""
  ]);
  
  return responderSucesso();
}

// Salva dados de Presente Reservado
function salvarPresente(spreadsheet, data) {
  let sheet = spreadsheet.getSheetByName("Presentes Reservados");
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Presentes Reservados");
    sheet.appendRow(["Data Reserva", "Nome Ganhador", "E-mail", "Presente Escolhido", "Valor Simbólico (R$)", "Forma de Pagamento", "Mensagem de Carinho", "Status Recebimento"]);
    formatarCabecalho(sheet);
  }
  
  const timestamp = new Date();
  sheet.appendRow([
    timestamp,
    data.name,
    data.email,
    data.giftTitle,
    data.amount ? parseFloat(data.amount) : "Valor Livre",
    data.paymentMethod, // 'Pix' ou 'Cartao'
    data.message || "",
    "Pendente" // Noivos alteram para "Confirmado" na planilha manualmente após checar o banco
  ]);
  
  return responderSucesso();
}

// Salva recado no Mural (Guestbook)
function salvarRecado(spreadsheet, data) {
  let sheet = spreadsheet.getSheetByName("Mural de Recados");
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Mural de Recados");
    sheet.appendRow(["Data Envio", "Nome Autor", "Mensagem", "Status Exibição"]);
    formatarCabecalho(sheet);
  }
  
  const timestamp = new Date();
  sheet.appendRow([
    timestamp,
    data.name,
    data.message,
    "Aprovado" // Por padrão aprovado, noivos podem deletar ou alterar se houver spam
  ]);
  
  return responderSucesso();
}

// Lista os recados do mural para exibir no site
function listarRecados(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("Mural de Recados");
  if (!sheet) return responderJSON([]);
  
  const data = sheet.getDataRange().getValues();
  const recados = [];
  
  // Pula a primeira linha (cabeçalho)
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    // Apenas mostra recados que tenham status "Aprovado"
    if (row[3] === "Aprovado") {
      recados.push({
        date: row[0],
        name: row[1],
        message: row[2]
      });
    }
  }
  
  // Retorna os recados ordenados do mais recente para o mais antigo
  recados.reverse();
  return responderJSON(recados);
}

// Lista os presentes já ganhos/reservados
function listarPresentesReservados(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("Presentes Reservados");
  if (!sheet) return responderJSON([]);
  
  const data = sheet.getDataRange().getValues();
  const presentes = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    // Se estiver confirmado ou pendente, conta como reservado/recebido
    presentes.push({
      giftTitle: row[3],
      status: row[7]
    });
  }
  
  return responderJSON(presentes);
}

// Auxiliares de Resposta JSON / CORS
function responderJSON(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}

function responderSucesso() {
  return responderJSON({ status: "success", message: "Dados salvos com sucesso!" });
}

function responderErro(mensagem) {
  return responderJSON({ status: "error", message: mensagem });
}

// Formatação estética do cabeçalho da planilha
function formatarCabecalho(sheet) {
  const range = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  range.setBackground("#03300B") // Cor do casamento
       .setFontColor("#FFFFFF")
       .setFontWeight("bold")
       .setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
}

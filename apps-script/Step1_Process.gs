// Step 1: Process the collected data
function processData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  Logger.log('Processing ' + data.length + ' rows');
}

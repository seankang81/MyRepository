// Step 0: Collect new data from a form submission
function collectNewData(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  var values = e.values;
  sheet.appendRow(values);
}

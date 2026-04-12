// ============================================
// PASTE THIS INTO GOOGLE APPS SCRIPT EDITOR
// (Extensions > Apps Script in your Google Sheet)
// Then deploy as a Web App.
// DELETE THIS FILE FROM YOUR REPO AFTER — it's just a reference.
// ============================================

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.attending,
    data.guests
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

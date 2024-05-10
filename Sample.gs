async function sample2() {
  const apiKey = "AIzaSyAgnTBTYgs6glCihjpvnKrhPQu690Ystjo";
  const fileId = "11KC8woNZCw3lTRzPyAI8H8Phj-LG49KY"; 

  // Parsing invoice of PDF file and retrieve values.
  const ip = new InvoiceApp({
    apiKey,
    blob: DriveApp.getFileById(fileId).getBlob(),
  });
  const res = await ip.run();
  if (typeof res == "object") {
    console.log("--- Valid values.");
    console.log(JSON.stringify(res));

    // do something.
  } else {
    console.log("--- Invalid values.");
    console.log(res);
  }
}

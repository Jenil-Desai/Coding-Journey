const qr = require('qrcode');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Function to generate QR code
async function generateQRCode(url, outputPath) {
  try {
    // Generate QR code
    const qrCodeDataUrl = await qr.toDataURL(url);

    // Save the QR code image
    const outputFileName = outputPath || 'qrcode.png';
    const outputFilePath = `./public/${outputFileName}`;
    fs.writeFileSync(outputFilePath, qrCodeDataUrl.split(',')[1], 'base64');

    console.log(`QR code generated and saved at: ${outputFilePath}`);
  } catch (error) {
    console.error('Error generating QR code:', error.message);
  }
}

app.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});

app.get("/qrcode", (req,res) => {
  res.render("./index.ejs");
});

app.post("/qrcode/gen", (req,res) => {
  let {url} = req.body;

  generateQRCode(url, 'myqrcode.png');
  res.render("indexPost.ejs");
});
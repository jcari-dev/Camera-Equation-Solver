const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const axios = require("axios");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "./uploads", limits: { fieldSize: 25 * 1024 * 1024 } });
const Tesseract = require("tesseract.js");
const fs = require("fs");

//Middleware


router.use(express.urlencoded({ extended: true }));
router.use(methodOverride("_method"));
// router.use(
//   express.json({
//     type: ["application/json", "text/plain"],
//   })
// );

router.get("/", (req, res) => {
  console.log("You have accessed/requested /get route!.");
  console.log(req.body);
  res.send('"/Api" route working!');
});

router.post("/", upload.single("uploaded_file"), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any

  // string generated by canvas.toDataURL()
  const img = req.body.uploaded_file;

  // strip off the data: url prefix to get just the base64-encoded bytes
  const data = img.replace(/^data:image\/\w+;base64,/, "");
  console.log(data)
  const buf = Buffer.from(data, "base64");
  Tesseract.recognize(buf, "eng", { logger: (m) => console.log(m) }).then(
    ({ data: { text } }) => {
      console.log(text)
      res.send(text)
    }
  );
//   fs.writeFile("./image.png", buf, function(err) {
//     if (err) throw err;
// });
  // console.log(typeof req.file)
  // console.log(req.file, req.body)
  
});
// EXPORT+
module.exports = router;

const { PythonShell } = require("python-shell");

const fs = require("fs"),
  fileUploader = require("multer")({ dest: "/tmp/" });


exports.getText = (req, res, next) => {
  const { load_path, text, num_speakers, speaker_id } = req.body;

  inputLoadPath = "/home/chojh11c/Reading_book_app/" + load_path
  
  var options = {
    pythonPath: "",

    pythonOptions: ["-u"],

    scriptPath: "",

    // args: [inputLoadPath,inputText,inputNumSpeakers,inputSpeakerID],
    args: ["--load_path", inputLoadPath, "--text", text, "--num_speakers",num_speakers, "--speaker_id",speaker_id],
  };

  ret = "";

  // PythonShell.run("test.py", options, function (err, results) {
  PythonShell.run("../synthesizer.py", options, function (err, results) {
    if (err) throw err;

    console.log(results[results.length - 1])

    wavFile = results[results.length - 1]

    const temporaryFilename = wavFile

    wavData = fs.readFileSync(temporaryFilename)

    wavBinary = Buffer.from(wavData, 'utf-8').toString('base64')
    
    
    bytes = fs.statSync(temporaryFilename)["size"];
 
  // do something with wavData

    return res.json({ ok: true, bytes, at: new Date(), Data: wavBinary });
    // return res.json({ ok: true, at: new Date(), Data: wavBinary });

    // res.json({ status: "test", data: results });
  });
};

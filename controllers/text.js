const { PythonShell } = require("python-shell");

exports.getText = (req, res, next) => {
  const { text } = req.body;

  var options = {
    pythonPath: "",

    pythonOptions: ["-u"],

    scriptPath: "",

    args: [text],
  };

  ret = "";

  PythonShell.run("test.py", options, function (err, results) {
    if (err) throw err;

    res.json({ status: "test", data: results });
  });
};

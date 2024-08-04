const { spawn } = require('child_process');
const path = require('./extract_mental_health_issues.py');
const scriptPath = path.join(__dirname, 'extract_mental_health_issues.py');


// Function to call Python script
function callPythonScript(notes, callback) {
  const scriptPath = path.join(__dirname, 'extract_mental_health_issues.py');
  const python = 'python3'; // Or 'python' depending on your system setup

  const process = spawn(python, [scriptPath]);

  // Send data to Python script
  process.stdin.write(JSON.stringify(notes));
  process.stdin.end();

  // Capture output from Python script
  let data = '';
  process.stdout.on('data', (chunk) => {
    data += chunk;
  });

  process.stdout.on('end', () => {
    try {
      const result = JSON.parse(data);
      callback(null, result); // Pass the result to the callback
    } catch (error) {
      callback(`Failed to parse JSON: ${error.message}`);
    }
  });

  process.stderr.on('data', (error) => {
    callback(`stderr: ${error.toString()}`); // Pass the error to the callback
  });
}

module.exports = { callPythonScript };


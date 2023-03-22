const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/writeData') {
    // Handle the POST request to /writeData
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      // Parse the form data
      const formData = new URLSearchParams(data);
      const inputData = formData.get('inputData');
      const email = formData.get('email');
      
      // Call the Python script to write the data to a file
      const pyProcess = spawn('python', ['writeToFile.py', inputData]);
      pyProcess.on('close', (code) => {
        if (code === 0) {
          // Success: Return a response to the client
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`Data "${inputData}" has been written to file.`);
        } else {
          
          // Error: Return a response to the client
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error occurred while writing to file.');
        }
      });
    });
  } else {
    // Handle all other requests
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Error: File Not Found');
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});

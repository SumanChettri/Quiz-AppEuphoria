import http from 'http';

const data = JSON.stringify({
  name: 'Admin',
  email: 'admin@example.com',
  password: '123456',
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/admin/create-admin',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  let body = '';
  console.log(`Status: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', () => {
    try {
      const parsed = JSON.parse(body);
      console.log('Response:', parsed);
    } catch (e) {
      console.log('Raw response:', body);
    }
  });
});

req.on('error', (error) => {
  console.error('Request error:', error);
});

req.write(data);
req.end();

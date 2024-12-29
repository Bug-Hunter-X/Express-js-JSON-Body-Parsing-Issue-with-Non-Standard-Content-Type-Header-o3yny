const express = require('express');
const app = express();
app.use(express.json({ type: '*/*' })); // Accepts any Content-Type
app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('User registered');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
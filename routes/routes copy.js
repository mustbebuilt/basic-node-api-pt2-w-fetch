const express = require('express');
const router = express.Router();
const dataController = require('../controllers/controllers');

// GET /
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// GET /data
router.get('/api', async (req, res) => {
  try {
    const data = await dataController.getAllData();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /data/:id
router.get('/api/:id', async (req, res) => {
  try {
    const data = await dataController.getDataById(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

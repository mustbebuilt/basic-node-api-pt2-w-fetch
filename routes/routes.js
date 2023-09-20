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

router.get('/api/:id', async (req, res) => {
  try {
    const data = await dataController.getDataById(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /api
router.post('/api', async (req, res) => {
  try {
    const newData = req.body;
    console.dir(newData);
    const data = await dataController.createData(newData);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT /api/:id
router.put('/api/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const data = await dataController.updateData(id, updatedData);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /api/:id
router.delete('/api/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await dataController.deleteData(id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
	  
	  


module.exports = router;

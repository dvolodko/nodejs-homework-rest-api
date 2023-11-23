const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json({ message: 'homework done' });
});

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'homework done' });
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'homework done' });
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'homework done' });
});

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'homework done' });
});

module.exports = router;

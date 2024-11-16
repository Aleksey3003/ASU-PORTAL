const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Создание приложения
const app = express();
const PORT = process.env.PORT || 5000;

// Подключаем CORS и Body Parser
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost/personnel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Создание схемы и модели для персонала
const personnelSchema = new mongoose.Schema({
  name: String,
  position: String,
  rank: String,
});

const Personnel = mongoose.model('Personnel', personnelSchema);

// API для получения всех сотрудников
app.get('/api/personnel', async (req, res) => {
  try {
    const personnel = await Personnel.find();
    res.json(personnel);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// API для добавления нового сотрудника
app.post('/api/personnel', async (req, res) => {
  const { name, position, rank } = req.body;

  const newPersonnel = new Personnel({
    name,
    position,
    rank,
  });

  try {
    await newPersonnel.save();
    res.status(201).json('New personnel added');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// API для обновления сотрудника
app.put('/api/personnel/:id', async (req, res) => {
  const { name, position, rank } = req.body;

  try {
    const updatedPersonnel = await Personnel.findByIdAndUpdate(req.params.id, {
      name,
      position,
      rank,
    });
    res.json(updatedPersonnel);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// API для удаления сотрудника
app.delete('/api/personnel/:id', async (req, res) => {
  try {
    await Personnel.findByIdAndDelete(req.params.id);
    res.json('Personnel deleted');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

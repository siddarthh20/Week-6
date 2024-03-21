require('./database');
    
const express = require('express');
const mongoose = require('mongoose');
const FoodItem = require('./FoodItem'); // Path to your FoodItem model

const app = express();
app.use(express.json()); // for parsing application/json

// MongoDB connection
mongoose.connect('mongodb+srv://kgotte:grk484505@foodnutritiondb.ornbfmj.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// CRUD operations

// Create a new food item
app.post('/food', async (req, res) => {
  try {
    const foodItem = new FoodItem(req.body);
    await foodItem.save();
    res.status(201).send(foodItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all food items
app.get('/food', async (req, res) => {
  try {
    const foodItems = await FoodItem.find({});
    res.status(200).send(foodItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single food item by ID
app.get('/api/food/:id', async (req, res) => {
    try {
      const food = await Food.findById(req.params.id);
      if (!food) return res.status(404).send('Food item not found.');
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Update a food item
app.put('/api/food/:id', async (req, res) => {
    try {
      const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!food) return res.status(404).send('Food item not found.');
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Delete a food item
app.delete('/api/food/:id', async (req, res) => {
    try {
      const food = await Food.findByIdAndRemove(req.params.id);
      if (!food) return res.status(404).send('Food item not found.');
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
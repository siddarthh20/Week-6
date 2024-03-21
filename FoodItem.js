const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: String,
  group: String,
  description: String,
  nutritionalInformation: {
    calories: Number,
    macronutrients: {
      proteins: Number,
      fats: Number,
      carbohydrates: Number
    },
    micronutrients: {
      vitamins: {
        A: Number,
        C: Number,
        D: Number,
      },
      minerals: {
        iron: Number,
        calcium: Number,
        potassium: Number,
      }
    },
    fiber: Number,
    sodium: Number,
    cholesterol: Number
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: [String],
  certifications: [String],
  countryOfOrigin: String,
  brand: String,
  dietaryRestrictions: [String],
  healthBenefits: [String],
  bestPractices: [String]
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
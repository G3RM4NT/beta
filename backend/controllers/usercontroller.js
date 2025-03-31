const User = require('../models/User.js');
const axios = require('axios'); // Para hacer solicitudes al servicio de recomendaciones

// Registrar un nuevo usuario
const registerUser  = async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser  = await user.save();
    res.status(201).json(savedUser );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener recomendaciones para un usuario
const getUserRecommendations = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId).populate('purchases');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Enviar datos al servidor de recomendaciones
    const response = await axios.post('http://localhost:5001/recommend', {
      searches: user.searches,
      purchases: user.purchases.map(p => p.name), // O cualquier otro campo que desees enviar
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser , getUserRecommendations };
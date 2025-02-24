const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const mongoURI = process.env.MONGODB_URI;


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado exitosamente a MongoDB Atlas'))
.catch(err => {
    console.error('Error de conexión a MongoDB Atlas:', err.message);
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

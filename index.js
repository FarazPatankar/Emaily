const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// We aren't exporting anything from the file. So it is fine to just require the entire file itself.
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

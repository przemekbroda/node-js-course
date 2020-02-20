const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');
const handlebars = require('express-handlebars');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views'); //domyślnie jest pod folder views

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
 
const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());
const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')






app.use('/', routes);
app.use('/docs', swaggerUI.serve,swaggerUI.setup(docs))

dbConnection();

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
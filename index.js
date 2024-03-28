const express = require("express");
const app = express();
const port = 8000;
const env = require("dotenv");
const mongoose = require("mongoose");
const db = require("./config/mongoose");
const path = require("path");
const passportJWT = require("./config/passport-jwt");
const cors = require("cors");
const passport = require("passport");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger UI Example",
      version: "1.0.0",
      description: "A simple Express API with Swagger UI",
    },
    servers: [
      {
        url: "https://nodejs-assignment-0zxb.onrender.com",
      },
    ],
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'apiKey',
            name: 'Authorization', // Use 'Authorization' as the header name
            scheme: 'bearer',
            in: 'header',
          },
        },
      },
    
  },
  apis: [ "./routes/index.js","./routes/api/index.js","./routes/api/user.js","./routes/api/fetchdata.js"],
  followRedirects: true
};

const swaagerspec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaagerspec));



app.get("/", (req, res) => {
  return res.send("welcome to mongodb");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("There is an error", err);
  }
  console.log(`Server is running on port ${port}`);
});

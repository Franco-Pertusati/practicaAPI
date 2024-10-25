const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler.js");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const whiteList = ["http://localhost:8080", "https://myapp.co"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Acceso denegreado"));
    }
  },
};

app.use(cors(options));

app.listen(port, () => {
  console.log("Corriendo en port " + port);
});

const express = require("express");
const app = express();

const dotEnv = require("dotenv");
dotEnv.config();

const PORT = process.env.PORT;

const routes = require("./routes/home");

app.use("/", routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    express.static("public", {
      setHeaders: (res, path) => {
        if (path.endsWith(".js")) {
          res.setHeader("Content-Type", "application/javascript");
        }
      },
    }),
  );

const pageUp = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`El servidor está levantado en el puerto ${PORT} y conectado a la base de datos.`);
        })
    } catch (error) {
        console.log(error);
        
    }
}

pageUp();
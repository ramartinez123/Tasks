
import express from "express";
import {engine} from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
//import { connect } from "mongoose";

const app = express();
 
 /* try {
      connect('mongodb://127.0.0.1:27017/test');
      console.log("ok")
    } catch (error) {
      handleError(error);
    }
 */

app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  })
);
app.set("views engine", ".hbs");

//middlewars

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

app.use(indexRoutes);
export default app;
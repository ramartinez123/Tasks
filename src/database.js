import mongoose from "mongoose"; 
import { MONGODB_URI } from './Conf/config';

(async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); 
  }
})();

   



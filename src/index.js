import express from "express";
import dotenv from "dotenv";
import db from "./db/db.js";

import Rol from "./models/Rol.js";
import Usuario from "./models/Usuario.js";
import Abono from "./models/Abono.js";
import Deudor from "./models/Deudor.js";
import Venta from "./models/Venta.js";
import DetalleVenta from "./models/DetalleVenta.js";
import Producto from "./models/Producto.js";
import Categoria from "./models/Categoria.js";
import Compra from "./models/Compra.js";
import Notificacion from "./models/Notificacion.js";
import TipoNotificacion from "./models/TipoNotificacion.js";
import PreferenciaNotificacion from "./models/PreferenciaNotificacion.js";
import Sugerencia from "./models/Sugerencia.js";
import NotificacionUsuario from "./models/NotificacionUsuario.js";

import SugerenciaRoutes from "./routes/SugerenciaRoutes.js"
import usuarioRoutes from "./routes/UsuarioRoutes.js";
import loginRoutes from "./routes/LoginRoutes.js";
import compraRoutes from "./routes/CompraRoutes.js";
import CategoriaRoutes from "./routes/CategoriaRoutes.js";
import productoRoutes from "./routes/ProductoRoutes.js";
import recuperarContrasenaRoutes from "./routes/RecuperarContrasenaRoutes.js";
import cors from "cors";
import notifiUsuarioRoutes from "./routes/NotificacionUsuarioRoutes.js";
import preferenciaNotificacionRoutes from "./routes/PreferenciaNotiRoutes.js";
import VentaService from "./services/VentaService.js";
import preferenciaNotificacionService from "./services/PreferenciaNotificacionService.js";

const router = express.Router();
dotenv.config({
  path: "../.env"
});

const app = express();
app.use(express.json());
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

router.use("/categorias", CategoriaRoutes);

//test conexion de la bd
db.authenticate()
  .then(() => {
    console.log("Databse connection successful")
    return db.sync({ alter: true });
  } )
  .catch((error) => console.log("Connection error: ", error));

app.listen(process.env.PORT, () => {
  console.log(`escuchando en http://localhost:${process.env.PUERTO}`);
});

router.use("/sugerencias", SugerenciaRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/login", loginRoutes);
router.use("/productos", productoRoutes);
router.use("/compras", compraRoutes);
router.use("/recuperar-contrasena", recuperarContrasenaRoutes);
router.use("/notificaciones", notifiUsuarioRoutes );
router.use("/preferenciaNotificacion", preferenciaNotificacionRoutes);
app.use(router);
//import UsuarioService from "./services/UsuarioService.js";
//UsuarioService.listarGestoras();
//VentaService.verificarStock();
//import UsuarioService from "./services/UsuarioService.js";
//const preferencia = await UsuarioService.crearPreferencia("0819", 1);
/*
try {
  const preferencia = await PreferenciaNotificacionService.saberPreferencia("333333", 1);
  if (preferencia != null) {
    console.log("Preferencia encontrada:", preferencia);
  } else {
    console.log("No se encontró preferencia."); // ⚠️ Este no se ejecutará si hay error
  }
} catch (error) {
  console.error("Ocurrió un error al obtener la preferencia:", error.message);
}*/
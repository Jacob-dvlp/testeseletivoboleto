const express = require("express");
const banc = require("../controller/boleto");
const routes = express.Router();

routes.get("/",banc.home);
routes.get("/boleto/:id",banc.verficarBoleto);


module.exports = routes;
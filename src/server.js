const express = require("express");
const routes = require("./routes/routes")

const server = express();
server.use(routes);

server.use((error,res,next)=>{
    res.status(error.status || 500)
    res.json({error: error.message})
});

server.listen(8080, () => console.log("Server is running"));

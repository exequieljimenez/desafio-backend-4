const express = require("express");
const router = require("./routes/router");

const app = express();

app.use("/api/", router);

app.use(express.static('public'))

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`escuchando al puerto ${server.address().port}`)
});

server.on("error", (error) => {
    console.log("Error===>", error.message)
})


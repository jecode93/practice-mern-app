require("dotenv").config();
const express = require("express");
const personalRoutes = require("./routes/route");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use("/api/personals", personalRoutes)

app.listen(process.env.PORT, (req, res) => {
    console.log(`App listen on port ${process.env.PORT}`);
})
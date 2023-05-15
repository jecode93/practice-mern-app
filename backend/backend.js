require("dotenv").config();
const express = require("express");
const personalRoutes = require("./routes/route");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use("/api/personals", personalRoutes)

mongoose.connect(process.env.DB).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App listen on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(error);
})

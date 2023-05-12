const express = require("express");
const personalRoutes = require("./routes/route");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use("/api/personals", personalRoutes)

app.listen(3000, (req, res) => {
    console.log("App listen on port 3000");
})
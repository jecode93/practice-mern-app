const Personal = require("../models/personaleModel");
const mongoose = require("mongoose")


//Get all personals
const getPersonals = async (req, res) => {
    const personals = await Personal.find({}).sort({ createdAt: -1 });
    res.status(200).json(personals);
}

//Get a personal
const getPersonal = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "No such personal"
        })
    }
    const personal = await Personal.findById(id);
    if (!personal) {
        res.status(404).json({
            error: "No such personal"
        })
    }
    res.status(200).json(personal);
}

//Create a new personal
const postPersonal = async (req, res) => {
    const { firstName, lastName, age } = req.body;
    try {
        const newPersonal = await Personal.create({ firstName, lastName, age });
        res.status(200).json(newPersonal);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

//Update a personal
const updatePersonal = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "No such personal"
        })
    }
    const personal = await Personal.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
    if (!personal) {
        res.status(404).json({
            error: "No such personal"
        })
    }
    res.status(200).json(personal);
}

//Delete a personal
const deletePersonal = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "No such personal found"
        })
    }
    const personal = await Personal.findOneAndDelete({ _id: id })
    if (!personal) {
        res.status(404).json({
            error: "No such personal"
        })
    }
    res.status(200).json(personal);
}


module.exports = { getPersonals, getPersonal, postPersonal, updatePersonal, deletePersonal }
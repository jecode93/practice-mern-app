const getPersonals = (req, res) => {
    res.json({
        Msg: "GET all personals"
    });
}

const getPersonal = (req, res) => {
    const { id } = req.params;
    res.json({
        Msg: `GET ${id} personal`
    });
}

const postPersonal = (req, res) => {
    res.json({
        Msg: "Post a personal"
    });
}

const updatePersonal = (req, res) => {
    const { id } = req.params;
    res.json({
        Msg: `Update ${id} personal`
    });
}

const deletePersonal = (req, res) => {
    const { id } = req.params;
    res.json({
        Msg: `Delete ${id} personal`
    });
}


module.exports = { getPersonals, getPersonal, postPersonal, updatePersonal, deletePersonal }
const UstadModel = require('../models/ustad.model');

const getAllUstad = async (req, res) => {
    try {
        const [data] = await UstadModel.getAllUstad();
        res.json({
            message: 'Get All Ustad Succes',
            data : data
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
        
    }
}

const createNewUstad = async (req, res) => {
    const {body} = req;
    try {
        await UstadModel.createNewUstad(body);
        res.json({
            message: 'Create New Ustad Succes',
            data : body
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
        
    }
}


const updateUstad = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UstadModel.updateUstad(id, body);
        res.json({
            message: 'Update Ustad Succes',
            data : {
                id: id,
                ...body
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
        
    }
}

const deleteUstad = async (req, res) => {
    const {id} = req.params;
    try {
        await UstadModel.deleteUstad(id);
        res.json({
            message: 'Delete Ustad Succes',
            data : {
                id: id
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
        
    }
}

module.exports = {
    getAllUstad,
    createNewUstad,
    updateUstad,
    deleteUstad
}
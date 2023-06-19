const pengajianModel = require('../models/pengajian.model');

const getAllPengajian = async (req, res) => {
    try {
        const [data] = await pengajianModel.getAllPengajian();
        res.statuscode(200).json({
            message: 'Get All Pengajian Succes',
            data : data
        })
        
    } catch (error) {   
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
        
    }
}

const createNewPengajian = async (req, res) => {
    const {body} = req;
    try {
        await pengajianModel.createNewPengajian(body);
        res.statuscode(201).json({
            message: 'Create New Pengajian Succes',
            data : body
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
        
    }
}


const updatePengajian = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await pengajianModel.updatePengajian(id, body);
        res.statuscode(200).json({
            message: 'Update Pengajian Succes',
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

const deletePengajian = async (req, res) => {
    const {id} = req.params;
    try {
        await pengajianModel.deletePengajian(id);
        res.statuscode(200).json({
            message: 'Delete Pengajian Succes',
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
    getAllPengajian,
    createNewPengajian,
    updatePengajian,
    deletePengajian
}


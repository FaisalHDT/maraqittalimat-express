const BeritaModels = require('../models/berita.model');

const getAllBerita = async (req, res) => {
    try {
        const [data] = await BeritaModels.getAllBerita();

        res.status(200).json({
            message: 'Get All Berita Succes',
            data : data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
    }
}

const createNewBerita = async (req, res) => {
    const {body} = req;
    try {
      
        await BeritaModels.createNewBerita(body);
        res.json({
            message: 'Create New Berita Succes',
            data : body
        })

        
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
    }
}


const updateBerita = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await BeritaModels.updateBerita(id, body);
        res.json({
            message: 'Update Berita Succes',
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

const deleteBerita = async (req, res) => {
    const {id} = req.params;
    try {
        await BeritaModels.deleteBerita(id);
        res.json({
            message: 'Delete Berita Succes'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
    }
}

module.exports = {
    getAllBerita,
    createNewBerita,
    updateBerita,
    deleteBerita

}
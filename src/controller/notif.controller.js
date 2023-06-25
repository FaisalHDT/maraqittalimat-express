const notifModels = require('../models/notif.model');
const getAllNotfi = async (req, res) => {
    try {
        const [data] = await notifModels.getNofti();
        res.json({
            message: 'Get All Notifikasi Succes',
            data : data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
    }
}

const createNewNotfi = async (req, res) => {
    const {body} = req;
    try {
        await notifModels.createNewNoti(body);
        res.json({
            message: 'Create New Notifikasi Succes',
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
    }
}

const updateNotfi = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await notifModels.updateNoti(id, body);
        res.json({
            message: 'Update Notifikasi Succes',
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

const deleteNotfi = async (req, res) => {
    const {id} = req.params;
    try {
        await notifModels.deleteNoti(id);
        res.json({
            message: 'Delete Notifikasi Succes'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serVerMessage : error
        })
    }
}

module.exports = {
    getAllNotfi,
    createNewNotfi,
    updateNotfi,
    deleteNotfi
}
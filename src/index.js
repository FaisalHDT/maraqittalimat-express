require('dotenv').config()
const PORT = process.env.PORT;

const express = require('express');
const beritaRouter = require('./routes/berita.route');
const ustadRouter = require('./routes/ustad.route');
const pengajianRouter = require('./routes/pengajian.route');
const notifRouter = require('./routes/notif.route');
const app = express();

app.use(express.json());
app.use('/berita', beritaRouter);
app.use('/ustad',ustadRouter);
app.use('/pengajian',pengajianRouter);
app.use('/notifikasi',notifRouter);




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})






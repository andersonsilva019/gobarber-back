const multer = require('multer');
const crypto = require('crypto');
const { extname, resolve } = require('path')

module.exports = {
  /* Como o multer vai guardar os arquivos */
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        //adsabdbsnds.png
        return cb(null, res.toString('hex') + extname(file.originalname))
      });
    },
  })
};

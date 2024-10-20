'use strict';

const multer =require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'photos/');
  },
  filename: (req, file, cb) => {
    cb(null, `${(Date.now())}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

module.exports = {
  upload
}

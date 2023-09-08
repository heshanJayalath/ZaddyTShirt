const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        // const filename = file.originalname.split(".")[0];
        // cb(null, filename + "-" + uniqueSuffix + ".png");
        const originalFilename = file.originalname.split(".")[0];
        const extension = getFileExtension(file.originalname);
        const newFilename = `${originalFilename}-${uniqueSuffix}.${extension}`;
        // cb(null, filename + "-" + uniqueSuffix + getFileExtension(file.originalname));
        cb(null, newFilename);
    },
});

const getFileExtension = (filename) => {
    const parts = filename.split(".");
    return parts[parts.length - 1];
};

exports.upload = multer({ storage: storage });
const express = require('express')
const router = express.Router()
const path = require('path')
const multer  = require('multer')
const shortid = require('shortid')

let storage = multer.diskStorage({
	destination: function(req, file, done) {
		done(null, path.join(__dirname, '..', 'uploads'))
	},
	filename: function(req, file, done) {
		let extension = path.extname(file.originalname)
		extension = (extension !== '') ? `${extension}` : extension
		done(null, `${shortid.generate()}${extension}`)
	}
})

let upload = multer({storage: storage}).single('file')

router.post('/upload', (req, res) => {
	upload(req, res, err => {
		if (err) {
            return res.status(500).json({filename: null})
		}
		console.log(`file uploaded: ${req.file.filename}`)
		res.json({filename: req.file.filename})
	})
})

module.exports = router
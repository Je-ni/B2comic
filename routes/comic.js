var express = require('express');
var router = express.Router();
var comicController = require('../Controllers/ComicController');

/* GET comics listing. */
router.get('/', comicController.getComics);

router.post('/add', comicController.addComic);

router.post('/delete', comicController.deleteComic);

router.get('/search', comicController.getComicByParam);

module.exports = router;

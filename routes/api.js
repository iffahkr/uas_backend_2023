// import NewsController
const NewsController = require('../controllers/NewsController');

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello News API Express");
});

// Membuat routing news
router.get('/news', NewsController.index);
router.post('/news', NewsController.store);
router.put('/news/:id', NewsController.update);
router.delete('/news/:id', NewsController.destroy);
// menambahkan route untuk get detail resource
router.get("/news/:id", NewsController.show);
router.get("/news/:title", NewsController.search);
router.get("/news/category/sport", NewsController.sport);
router.get("/news/category/finance", NewsController.finance);
router.get("/news/category/automotive", NewsController.automotive);

// export router
module.exports = router;
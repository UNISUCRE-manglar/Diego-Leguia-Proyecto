const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderHome, rendertrabajo,renderpapegu } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/home", renderHome);
router.get("/trabajo", rendertrabajo);
router.get("/papegu", renderpapegu);
module.exports = router;

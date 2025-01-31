const express = require("express");
const route = express.Router();
const homeController = require("../controller/homeController")
const detailController = require("../controller/detailController")
const searchController = require("../controller/searchController")

//HOME ROUTES
route.get("/", homeController.index);
route.get("/home", homeController.index);
route.get("/signin", (req, res)=>{
    res.render("signin");
})

route.get("/signup", (req, res)=>{
    res.render("signup");
})

//Details Routes
route.get("/detail",detailController.index)

//SearchResult Routes
route.get("/searchresults",searchController.index)





module.exports = route;
const cities = require("./cities/cities.json");
const metros = require("./cities/metro.json");
const districts = require("./cities/district.json");
const comfort = require("./comfort.json");
const rooms = require('./rooms.json');
const news = require("./news/news.json");
const catalog = require("./catalog.json");
const rents = require("./rents.json");

module.exports = () => ({
    cities,
    catalog,
    news,
    districts,
    comfort,
    rooms,
    metros,
    rents
})
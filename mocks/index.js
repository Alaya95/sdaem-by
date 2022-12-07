const cities = require("./cities.json");
const catalog = require("./catalog.json");
const news = require("./news.json")

module.exports = () => ({
    cities: cities,
    catalog: catalog,
    news: news
})
/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/
const File = require("../models/csv");

/** ------------------ EXPORTING FUNCTION To open home page ------------------ **/
module.exports.home = async function (req, res) {
    try {
        let file = await File.find({});
        return res.render('home', {
            files: file,
            title: "Home"
        });
    } catch (error) {
        console.log('Error in homeController/home', error);
        return;
    }
}
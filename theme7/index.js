const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

app.engine("hbs", expressHbs.engine(
    {
        layoutsDir: "views",
        defaultLayout: "layout",
        extname: "hbs"
    }
));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(__dirname + '/public'));

app.use("/activity", function(_, response) {
    response.render("activity", {
        title: "Activity in Twitch"
    });
});

app.use("/biography", function(_, response) {
    response.render("biography", {
        title: "Biography"
    });
});

app.use("/career", function(_, response) {
    response.render("career", {
        title: "Career"
    });
});

app.use("/", function(_, response) {
    let linksList = [];
    linksList.push({platform: "Twitch channel", link: "https://www.twitch.tv/vansamaofficial"});
    linksList.push({platform: "Instagram", link: "https://www.instagram.com/vansamaofficial/"});
    linksList.push({platform: "Linktree", link: "https://linktr.ee/vansamaofficial"});

    response.render("home.hbs", {
        title: "Van Darkholme",
        links: linksList
    });
});

app.listen(3000, () => {
    console.log("index listening to port 3000");
});
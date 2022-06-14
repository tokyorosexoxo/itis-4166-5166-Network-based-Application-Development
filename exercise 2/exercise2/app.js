const express = require('express');
const path = require('path');
const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/contact', function (req, res) {
    res.render("contact.html");
});
app.get('/about', function (req, res) {
    res.render("about.html");
});
app.get('/404', function (req, res) {
    res.render("404.html");
});


// server set-up
app.listen('8080', (err) => {
    if (err) console.log(err);
    console.log(`Server Up and Running at http://localhost:8080`);
});

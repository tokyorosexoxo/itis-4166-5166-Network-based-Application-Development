const express = require('express');
const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan');
const ejs = require('ejs');

const app = express();
let port = 3000;
let host = 'localhost';

app.set('view engine', 'ejs');

let students = [
    { id: '1', name: 'Alice', major: 'Computer Science', gpa: 3.5},
    { id: '2', name: 'Bob', major: 'Biology', gpa: 3.2 },
    { id: '3', name: 'Charlie', major: 'Physics', gpa: 3.0}
];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('tiny'));

app.get('/students', (req, res) => {
    res.render("student.ejs",{student:true, 
        // access objects from array by index 
        // i.e., students[0], then access all elements of that object 
        // (like students[0].major)
        name1:students[0].name, 
        major1:students[0].major, 
        gpa1:students[0].gpa,
        name2:students[1].name, 
        major2:students[1].major, 
        gpa2:students[1].gpa,
        name3:students[2].name, 
        major3:students[2].major, 
        gpa3:students[2].gpa,
    });
    
    });

app.post('/students', (req, res) => {
    //console.log(req.body);
    let student = req.body;
    student.id = uuidv4();
    students.push(student);
    res.redirect('/students');
});

app.get('/students/create', (req, res) => {
    res.sendFile('./views/new.html', { root: __dirname });
});

app.get('/students/:sid', (req, res) => {
    let id = req.params.sid;
    let student = students.find(element => element.id === id);
    res.render('student', {student: student});
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.get('/contact-me', (req, res) => {
    res.redirect(301, '/contact');
});

app.use((req, res, next) => {
    res.status(404).send('Page cannot be found');
});

app.listen(port, host, () => {
    console.log('The server is running at port', port);
});
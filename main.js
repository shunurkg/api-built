const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const studentList = [
    {
        id: 1,
        name: 'abc',
        age: 21,
        dept: 'CSE'
    },
    {
        id: 2,
        name: 'abca',
        age: 22,
        dept: 'IT'
    },
    {
        id: 3,
        name: 'abcb',
        age: 23,
        dept: 'ECE'
    },
    {
        id: 4,
        name: 'abcc',
        age: 22,
        dept: 'EEE'
    },
    {
        id: 5,
        name: 'abcd',
        age: 23,
        dept: 'MECH'
    },
    {
        id: 6,
        name: 'abce',
        age: 23,
        dept: 'IT'
    },
    {
        id: 7,
        name: 'abcf',
        age: 22,
        dept: 'CIVIL'
    },
    {
        id: 8,
        name: 'abcg',
        age: 23,
        dept: 'EIE'
    },
    {
        id: 9,
        name: 'abch',
        age: 21,
        dept: 'CSE'
    }

]
app.get('/api/students', (req, res) => {
    res.json(studentList);
});
app.post('/api/student',(req,res) => {
    const newStudent={
        ...req.body,
        id:studentList.length+1
    };
    studentList.push(newStudent);
    res.status(201);
    //to acknowledge user that a new student obj is created 
    res.json(newStudent.id);
});
app.delete('/api/student/:id',(req,res)=> {
    const idToBeDeleted=parseInt(req.params.id);
    const studentToBeDeleted=studentList.findIndex(student=>student.id===idToBeDeleted);
    studentList.splice(studentToBeDeleted,1);
     //to acknowledge user that a new student obj is deleted
    res.json(idToBeDeleted);
});
app.listen(5000);

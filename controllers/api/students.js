const Class = require('../../models/class');
const Student = require('../../models/student')

module.exports = {
    create,
    getGrades
};

async function create(req, res) {
    const student = await Student.findById(req.params.id)
    student.grade = req.body.grade.Grade
    student.save()
    console.log(student.grade)
    res.json(student.grade)
};

async function getGrades(req, res) {
    const student = await Student.findById(req.params.id)
    // if(student.grade) res.json(student.grade)

};
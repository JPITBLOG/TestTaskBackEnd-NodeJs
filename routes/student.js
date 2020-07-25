'use strict';
const student = require(`../service/student`);
const express = require(`express`);
let studentRoute = express.Router();

studentRoute.get(`/getAllStudent`, student.getStudents);
studentRoute.get(`/getPagination`, student.setPagination);

module.exports = {studentRoute};
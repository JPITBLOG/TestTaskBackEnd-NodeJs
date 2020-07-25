'use strict';

let studentArray = [
    {_id : '1' , fname : 'man' , lname : 'patel' , gender: 'male' , dateofBirth: '1992-04-11'},
    {_id : '2' , fname : 'Raj' , lname : 'khalasi' , gender: 'male' , dateofBirth: '1991-08-20'},
    {_id : '3' , fname : 'Man' , lname : 'patel' , gender: 'male' , dateofBirth: '1992-06-11'},
    {_id : '4' , fname : 'Rina' , lname : 'patel' , gender: 'female' , dateofBirth: '1999-08-07'},
    {_id : '5' , fname : 'man' , lname : 'patel' , gender: 'male' , dateofBirth: '1998-02-14'},
    {_id : '6' , fname : 'ketan' , lname : 'patel' , gender: 'male' , dateofBirth: '1992-05-07'},
    {_id : '7' , fname : 'man' , lname : 'patel' , gender: 'male' , dateofBirth: '2001-04-16'},
    {_id : '8' , fname : 'hetal' , lname : 'patel' , gender: 'male' , dateofBirth: '2013-08-20'},
    {_id : '9' , fname : 'jay' , lname : 'rana' , gender: 'male' , dateofBirth: '2004-11-01'},
    {_id : '10' , fname : 'kirty' , lname : 'malin' , gender: 'female' , dateofBirth: '2014-10-18'}
    ];

/*pagination value*/
let pageSize = 3;
let currentPage;
let firstPage;
let lastPage;
let nextPage;
let prevPage;
let studentLength = studentArray.length;
let totalPages;

function paginationCalculate(currentPage) {
    totalPages = Math.ceil(studentLength / pageSize);
    firstPage = 1;
    lastPage = totalPages;
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, studentLength - 1);
    nextPage = currentPage < totalPages? currentPage + 1 : totalPages;
    prevPage = firstPage < currentPage? currentPage - 1 : firstPage;
    return {startIndex: startIndex, endIndex: endIndex, paginationRecord: {
            firstPage: firstPage,
            lastPage: lastPage,
            currentPage: currentPage,
            nextPage: nextPage,
            prevPage: prevPage,
            totalPages: totalPages,
            studentLength: studentLength
        }};
}

function getStudents(req, res) {
    currentPage = req.query.currentPage;
    currentPage = parseInt(currentPage);
    let {startIndex, endIndex, paginationRecord} = paginationCalculate(currentPage);
    let student = studentArray.slice(startIndex, endIndex+1);
    res.send({student: student, paginationRecord: paginationRecord});
}

function setPagination(req, res) {
    if (studentLength) {
        currentPage = 1;
        let {paginationRecord} = paginationCalculate(currentPage);
        res.send({paginationRecord: paginationRecord});
    }
    else {
        res.send({paginationRecord: {
                firstPage: 0,
                lastPage: 0,
                currentPage: 0,
                nextPage: 0,
                prevPage: 0,
                totalPages: 0,
                studentLength: 0
            }});
    }
}

function getStudent(req, res) {
    let currentPage = req.query.currentPage;
    let search = req.query.Search;
    let dateFrom = req.query.DateFrom;
    let dateTo = req.query.DateTo;
    let gender = req.query.Gender;

    /* searching is pending*/
}

module.exports = {
    getStudents,
    setPagination,
    getStudent
}
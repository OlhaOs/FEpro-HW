const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

function getAverage(arr) {
  const average = arr.reduce((acc, item) => (acc += item), 0) / arr.length;
  return average;
}

function calculateStudentAverageMark(student) {
  const avg = getAverage(student.marks);
  return avg;
}

function getArrayOfMarks(arr) {
  let arrNew = [];
  arr.forEach((item) => (arrNew = arrNew.concat(item.marks)));
  return arrNew;
}

function calculateGroupAverageMark(obj) {
  const arrayMarks = getArrayOfMarks(obj);
  const averageAll = getAverage(arrayMarks);
  return averageAll;
}

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

function calculateStudentAverageMark(obj) {
  const avg =
    obj.marks.reduce((acc, item) => (acc += item), 0) / obj.marks.length;
  return avg;
}

function getArrayOfMarks(arr) {
  let arrNew = [];
  arr.forEach((item) => (arrNew = arrNew.concat(item.marks)));
  return arrNew;
}

function calculateGroupAverageMark(values) {
  const arrayMarks = getArrayOfMarks(values);
  const averageAll =
    arrayMarks.reduce((acc, item) => (acc += item), 0) / arrayMarks.length;
  return averageAll;
}

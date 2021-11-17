const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};
//1.
function findPerson(arr, id) {
  let whichArr = arr;
  if (whichArr === "students") {
    whichArr = school.students;
  } else {
    whichArr = school.teachers;
  }
  return whichArr.find(function (person) {
    return person.id === id;
  });
}
console.log(findPerson("students", 12));

//2.

function assignStudent(id, subject) {
  let pickStudent = findPerson("students", id);

  let teacherInfo = school.teachers.find((teacherItem) => {
    return teacherItem.subjects.find((subjectItem) => {
      return subjectItem === subject;
    });
  });
  teacherInfo.students.push(pickStudent);
  if (teacherInfo.capacityLeft > 0) {
    teacherInfo.capacityLeft--;
  } else {
    console.log("Sorry, no available teachers left");
  }
}
assignStudent(10, "chemistry");
console.log(school);

//3.
function assignTeacherSubject(teacherId, newSubject) {
  let teacher = findPerson("teacher", teacherId);
  console.log(teacher);
  let isSubject = teacher.subjects.find((subject) => {
    return subject === newSubject;
  });
  console.log(isSubject);

  if (!isSubject) teacher.subjects.push(newSubject);
}
assignTeacherSubject(1, "computer science");
console.log(school);

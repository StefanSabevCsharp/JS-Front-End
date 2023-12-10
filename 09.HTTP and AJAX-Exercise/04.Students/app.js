async function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";
  const tb = document.querySelector("tbody");

  let promise = await fetch(baseUrl);
  let students = await promise.json();

  Object.values(students).forEach(student => {
    
    let tr = document.createElement("tr");
    tr.innerHTML =
    `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${student.grade}</td>
    `
    tb.appendChild(tr);
   

  });
  const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll("input");
  const btn = document.getElementById("submit");
  btn.addEventListener('click', createStudent);

  async function createStudent(e){
    e.preventDefault();
    let newStudent = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: facultyNumber.value,
      grade: grade.value
    }
    let promise = await fetch(baseUrl,{
      method: "POST",
      body: JSON.stringify(newStudent)
    });
    let student = await promise.json();
    createTr(student);
    location.reload();
  }



  function createTr(student){

    let tr = document.createElement("tr");
    tr.innerHTML =
    `
    <td>${st.firstName}</td>
    <td>${st.lastName}</td>
    <td>${st.facultyNumber}</td>
    <td>${st.grade}</td>
    `
    tb.appendChild(tr);
  }

}

attachEvents();
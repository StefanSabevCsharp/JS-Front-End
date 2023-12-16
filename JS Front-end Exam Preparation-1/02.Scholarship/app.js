window.addEventListener("load", solve);

function solve() {
    
    const nextBtn = document.getElementById("next-btn");
    const studentNameElement = document.getElementById("student");
    const universityElement = document.getElementById("university");
    const scoreElement = document.getElementById("score");
    const ulElement = document.getElementById("preview-list");
    const ulCandidatesElement = document.getElementById("candidates-list");

    nextBtn.addEventListener('click',extractData);

    function extractData(){

      let studentName = studentNameElement.value;
      let university = universityElement.value;
      let score = scoreElement.value;

      clearForm();

      if(!studentName || !university || !score){
        return;
      }

      let li = createHtml(studentName,university,score);
      ulElement.appendChild(li);
      nextBtn.disabled = true;
      
    }

    function createHtml(studentName,university,score){

      let li = document.createElement("li");
      li.className = "application";
      let article = document.createElement("article");
      let h4 = document.createElement("h4");
      h4.textContent = studentName;
      let p1 = document.createElement("p");
      p1.textContent = `University: ${university}`;
      let p2 = document.createElement("p");
      p2.textContent = `Score: ${score}`;
      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      let btnEdit = document.createElement("button");
      btnEdit.textContent = "edit";
      btnEdit.className = "action-btn edit";
      let btnApply = document.createElement("button");
      btnApply.textContent = "apply";
      btnApply.className = "action-btn apply";
      li.appendChild(article);
      li.appendChild(btnEdit);
      li.appendChild(btnApply);

      btnEdit.addEventListener('click',() => edit(studentName,university,score));
      btnApply.addEventListener('click',() => apply(li,btnEdit,btnApply));
      return li;
      
    }

    function edit(studentName,university,score){

      studentNameElement.value = studentName;
      universityElement.value = university;
      scoreElement.value = score;
      nextBtn.disabled = false;
      
      ulElement.innerHTML = "";

    }
    function clearForm(){
      studentNameElement.value = "";
      universityElement.value = "";
      scoreElement.value = "";
    }
    function apply(li,btnEdit,btnApply){
      nextBtn.disabled = false;
      ulElement.innerHTML = "";
      li.removeChild(btnEdit);
      li.removeChild(btnApply);
      ulCandidatesElement.appendChild(li);
      
    }
  }
  
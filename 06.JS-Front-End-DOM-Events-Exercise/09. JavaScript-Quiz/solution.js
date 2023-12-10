function solve() {
  let answer = Array.from(document.querySelectorAll('.answer-text'));
  let section = Array.from(document.getElementsByTagName('section'));

  answer.forEach((answ) => {
    answ.addEventListener('click', answerQuestion);

  });


  let correctAnswers = 0;

  function answerQuestion(e) {
    console.log(e.target.textContent);
    let sections = document.getElementsByTagName('section');
    let currentSection = sections[]
    if (e.target.textContent === 'onclick' || e.target.textContent === 'JSON.stringify()' || e.target.textContent === 'A programming API for HTML and XML documents') {
      correctAnswers++;

    }

  }

}

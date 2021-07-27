const quizData = [
    {
        question: "تعداد حلقه های المپیک؟",
        a: "5عدد",
        b: "6عدد",
        c: "7عدد",
        d: "8عدد",
        correct: "a",
    },
    {
        question: "تعداد اعضای شورای نگهبان؟",
        a: "شش نفر",
        b: "هشت نفر",
        c: "سیزده نفر",
        d: "دوازده نفر",
        correct: "d",
    },
    {
        question: " ارتفاعات سهند در کدام استان قرار دارد؟",
        a: "آذربایجان شرقی",
        b: "آذربایجان غربی",
        c: "کردستان",
        d: "زنجان",
        correct: "a",
    },
    {
        question: "کدام ورزشکار ایرانی موفق به کسب مدال طلای المپیک 1966 آتلانتا شد؟",
        a: "رسول خادم",
        b: "امیررضا خادم",
        c: "حسین رضا زاده",
        d: "عباس جدیدی",
        correct: "a",
    }
];
const answerEls = document.querySelectorAll(".answer");
const questionEl  = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

 let currentQuestion = 0;

 let score = 0;
  loadQuiz();

  function loadQuiz(){
      deselectAnswers();
      const currentQuizData = quizData[currentQuestion];
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
  }

  function getSelected(){
      let answer = undefined;
      answerEls.forEach((answerEl) =>{
          if(answerEl.checked){
              answer = answerEl.id;
          }

          });
      return answer
  }

  function deselectAnswers(){
      answerEls.forEach((answerEl) =>{
          answerEl.checked = false;
      })
  }
  
  submitBtn.addEventListener('click' , () =>{

      const answer = getSelected();
      if (answer){

          if(answer === quizData[currentQuestion].correct){
              score++;
          }
          currentQuestion++;
          if(currentQuestion < quizData.length){
              loadQuiz();
          } else{
              quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              <button onclick="location.reload()">Reload</button>
              `;
          }

      }


  });
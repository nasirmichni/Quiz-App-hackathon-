document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start-btn');
    const quizContainer = document.querySelector('#quiz-container');
    const submitButton = document.querySelector('.submit-btn');
    const nameInput = document.querySelector('.nameInput');
    const rollNoInput = document.querySelector('.rollNoInput');
    const batchInput = document.querySelector('.batchInput');
    const sessionInput = document.querySelector('.sessionInput');
    const startMessage = document.querySelector('.start');
  
    let questions = []; 
  
    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', nextQuestion);
  
    function startQuiz() {
      startMessage.style.display = 'none';
      nameInput.style.display = 'none';
      rollNoInput.style.display = 'none';
      batchInput.style.display = 'none';
      sessionInput.style.display = 'none';
      startButton.style.display = 'none';
  
      quizContainer.style.display = 'block';
      submitButton.style.display = 'inline-block';
    
      addQuestions();
  
      showQuestion();
    }
  
    function addQuestions() {
      
      questions.push(
        {
          question: 'What is the Capital of Pakistan?',
          answers: ['Lahor', 'Islamabad', 'Peshawar', 'Karachi']
        },
        {
          question: 'When Pakistan got its indefendance?',
          answers: ['1946', '1948', '1945', '1947']
        },
        {
          question: 'Who was the Founder of Pakistan?',
          answers: ['Quaid E Azam', 'Imran Khan', 'Liaqat Ali', 'Alama Iqbal']
        },
        {
          question: 'What is the largest planet in our solar system?',
          answers: ['Jupiter', 'Saturn', 'Neptune', 'Mars']
        },
        {
          question: 'What is the chemical symbol for water?',
          answers: ['H2O', 'CO2', 'O2', 'NaCl']
        },
        {
          question: 'Who won the 1992 world cup?',
          answers: ['Nawaz Sharif', 'Asif Zardari', 'Malinga', 'Imran Khan']
        },
        {
          question: 'What year did the Titanic sink?',
          answers: ['1912', '1915', '1907', '1920']
        },
        {
          question: 'Which planet is known as the Red Planet?',
          answers: ['Mars', 'Venus', 'Mercury', 'Earth']
        },
        {
          question: 'What is the capital of Saudi Arabia?',
          answers: ['Taif', 'Riadh', 'Madina', 'Jedda']
        },
        {
          question: 'What is the national language of Pakistan?',
          answers: ['Urdu', 'Farsi', 'Hindi', 'Chinese']
        }
        
      );
    }
  
    let currentQuestionIndex = 0;
  
    function showQuestion() {
      const question = questions[currentQuestionIndex];
      quizContainer.innerHTML = `
        <div>
          <h4>Question ${currentQuestionIndex + 1}: ${question.question}</h4>
          ${question.answers.map(answer => `
            <label>
              <input type="radio" name="answer" value="${answer}">
              ${answer}
            </label>
          `).join('')}
        </div>
      `;
    }
  
    function nextQuestion() {
      
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
        
      } else {
        alert("Thanks for your quiz");
       
        quizContainer.innerHTML = '<h3>Quiz completed!</h3>';
        quizContainer.style.textAlign = "center";
        quizContainer.style.fontFamily = "Arial, sans-serif";
        submitButton.style.display = 'none';
      }
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('colorButton');
  const body = document.body;
  let isAltColor = false;

  button.addEventListener('click', function() {
    if (isAltColor) {
      body.style.backgroundColor = '#fefcff'; // Cor original
    } else {
      body.style.backgroundColor = '#8b9aff'; // Cor alternativa
    }

    isAltColor = !isAltColor; // Inverte o estado da cor
  });
});






document.getElementById('toggleButton').addEventListener('click', function () {
  var photoContainer = document.getElementById('photoContainer');
  if (photoContainer.classList.contains('hidden')) {
    photoContainer.classList.remove('hidden');
  } else {
    photoContainer.classList.add('hidden');
  }
});










const questions = [
    {
        question: "Qual nome da nossa futura filha?",
        answers: {
            A: "Laura",
            B: "Flora",
            C: "Mileni"
        },
        correctAnswer: "B"
        
    },


{
        question: "Quem dos dois não queria namorar?",
        answers: {
            A: "Victor",
            B: "Bianca",
            C: "Os dois"
        },
        correctAnswer: "A"
        
        
        
        
        
    },
{
        question: "Quem acha que manda  no relacionamento?",
        answers: {
            A: "Victor",
            B: "Bianca",
            C: "Os dois"
        },
        correctAnswer: "C"
        
        
        
        
        
    },


{
        question: "Quem tem mais ciúmes do seu companheiro?",
        answers: {
            A: "Bianca",
            B: "Victor",
            C: "Os 2 disputam"
        },
        correctAnswer: "B"
        
        
        
        
        
    },

{
        question: "Quem gasta muito dinheiro sem dó ?",
        answers: {
            A: "Bianca",
            B: "Victor",
            C: "Victor"
        },
        correctAnswer: "A"
        
        
        
        
        
    },
{
        question: "Quem dorme assistindo filme toda vez?",
        answers: {
            A: "Bianca",
            B: "Victor",
            C: "Os dois"
        },
        correctAnswer: "A"
        
        
        
        
        
    },

{
        question: "Quem enche o saco do outro ?",
        answers: {
            A: "Victor",
            B: "Bianca",
            C: "Nenhum"
        },
        correctAnswer: "A"
        
        
        
        
        
    },

{
        question: "Quem é chora muito , muito chorão?",
        answers: {
            A: "Bianca",
            B: "Victor",
            C: "Nenhum dos dois"
        },
        correctAnswer: "A"
        
        
        
        
        
    },

{
        question: "Quem é mais sem educação com o companheiro ?",
        answers: {
            A: "Bianca",
            B: "Victor",
            C: "Nenhum dos dois "
        },
        correctAnswer: "C"
        
        
        
        
        
    },


    {
        question: "Qual o nome do nosso futuro filho ?",
        answers: {
            A: "Davi",
            B: "Beni",
            C: "Nenhum"
        },
        correctAnswer: "C"
    },

    // Adicione mais perguntas aqui
];

let currentQuestion = 0;
let score = 0;
let answerChosen = false; // Variável para rastrear se a resposta foi escolhida

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const ulElement = document.querySelector("ul");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next");

    questionElement.textContent = `Pergunta ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    ulElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.style.display = "none";
    
    answerChosen = false; // Habilita a escolha de uma resposta

    for (const option in questions[currentQuestion].answers) {
        const liElement = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = `${option}) ${questions[currentQuestion].answers[option]}`;
        button.onclick = () => {
            if (!answerChosen) { // Verifica se a resposta já foi escolhida
                checkAnswer(option);
                answerChosen = true; // Marca a resposta como escolhida
            }
        };
        liElement.appendChild(button);
        ulElement.appendChild(liElement);
    }
}

function checkAnswer(selectedOption) {
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next");
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        resultElement.textContent = "Resposta correta!";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = "A resposta correta é " + correctAnswer;
        resultElement.style.color = "red";
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        
        
        showFinalScore();
        para.textContent =
      "It is " ;
    }
}

function showFinalScore() {
    const questionElement = document.getElementById("question");
    const ulElement = document.querySelector("ul");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next");
    const restartButton = document.getElementById("restart");

    questionElement.textContent = `Quiz finalizado.Sua pontuação: ${score} de ${questions.length}`;
    ulElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.style.display = "none";
    restartButton.style.display = "block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    document.getElementById("restart").style.display = "none";
}

displayQuestion();






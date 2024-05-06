

const quizData = [
  {
    Qustion:"what is html",
    Answer:[
      {
           Option:"hyper text markup language",
           isTrue:true,
      },
      {
            Option:"hyper text makeup language",
            isTrue:false,
      }
    ]
  },
  {
    Qustion:"waht is css",
    Answer:[
      {
        Option:"casecading style sheet",
        isTrue:true,
      },
       {
        Option:"programing language",
        isTrue:false,
       }
    ]
  },
  {
    Qustion:" How many days are there in a week?",
    Answer:[
      {
        Option: "7 Days",
        isTrue:true,
      },
      {
        Option: "10 Days",
        isTrue:false,

      },

    ]
  },
  {
    Qustion:"How many hours are there in a day?",
    Answer:[
      {
        Option:"29 hours",
        isTrue:false,

      },
      {
         Option:"24 hours",
         isTrue:true,
      }
    ]
  },
  {
    Qustion:"How many letters are there in the English alphabet?",
    Answer:[
      {
        Option:"26 latters",
        isTrue:true,
      },
      {
        Option:"30 latters",
        isTrue:false,
      }
    ]
  }
]
const quizDiv = document.getElementById("question");
const answer = document.getElementById("answer");
const score = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
 let parentIndex = 0;
 let scoreVal = 0;
function displayQuiz(arr, i){
  if (i > quizData.length - 1) {
    quizDiv.innerHTML = `Your Quiz Is Over , out of 5 Result is ${scoreVal}`;
    answer.style.display = "none";
    parentIndex = 0;
  }
        quizDiv.innerHTML = `<div class = "text-red-800 font-semibold text-center text-3xl">${arr[i].Qustion}</div>`
        answer.innerHTML = "";
        for(let j =0;j < arr[i].Answer.length; j++){ 
            answer.innerHTML += `<li class = "text-center">
               <input type = "radio" onclick = "isChecked(${j})" />
                ${arr[i].Answer[j].Option}
            </li>`
        }
}
displayQuiz(quizData,parentIndex);

 function isChecked(index){
  if(quizData[parentIndex].Answer[index].isTrue == true){
    scoreVal++;
    score.innerHTML = scoreVal; 
    parentIndex++;
    displayQuiz(quizData,parentIndex);
  } else {
        parentIndex++;
        displayQuiz(quizData,parentIndex);
  }
       
 };
  restartBtn.addEventListener("click",function(){
      parentIndex = 0;
      scoreVal = 0;
      score.innerHTML = scoreVal;
      answer.style.display = "block"
      displayQuiz(quizData,parentIndex);
  
  });
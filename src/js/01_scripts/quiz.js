document.addEventListener("DOMContentLoaded", function () {
   const requestURL = "https://my-json-server.typicode.com/VisualYuki/jsonData/db";

   let promise = fetch(requestURL).then((response) => {
      return response.json();
   });

   promise.then((response) => {
      let answersResponse = response;
      debugger;
      let app = new Vue({
         el: "#quiz",
         data: {
            questions: answersResponse.questions,
            currentQuestionIndex: 0,
            isSelectedRightAnswer: false,
            isFirstSelectedAnswer: true,
            correctAnswerCount: 0,
         },
         methods: {
            pressedNextBtn: function () {
               if (this.isSelectedRightAnswer) {
                  this.currentQuestionIndex++;
                  this.isFirstSelectedAnswer = true;
                  $("input:checked").prop("checked", false);
               }
            },
            selectAnswer: function (e) {
               let itemRoot = $(e.target).closest(".quiz__question-item");
               let selectedAnswerText = $(itemRoot).find(".quiz__question-choice").text().toLowerCase();
               if (this.checkAnswer(selectedAnswerText)) {
                  if (this.isFirstSelectedAnswer) {
                     this.correctAnswerCount++;
                  }
                  this.isSelectedRightAnswer = true;
               } else {
                  this.isSelectedRightAnswer = false;
               }
               this.isFirstSelectedAnswer = false;
            },
            isRightAnswer: function (questionIndex, answer) {
               if (this.questions[questionIndex].rightAnswer.toLowerCase() == answer.toLowerCase()) return true;
               else return false;
            },
            checkAnswer: function (selectedAnswer) {
               if (this.questions[this.currentQuestionIndex].rightAnswer.toLowerCase() === selectedAnswer) return true;
               else return false;
            },
         },
      });
 
   });
});

//resetData: function() {
//   this.isSelectedRightAnswer = false;
//   this.prevSelectedAnswer.removeClass("success error");
//   this.prevSelectedAnswer = null;
//   $("input:checked").prop('checked', false);
//},

//selectAnswer: function (e) {
//   let itemRoot = $(e.target).closest(".quiz__question-item");
//   let answerItem = $(itemRoot).find(".quiz__question-choice").text().toLowerCase();

//   if(answerItem === this.getAnswer()){
//      if(this.prevSelectedAnswer !== itemRoot) {
//         $(itemRoot).addClass("success");
//         this.isSelectedRightAnswer = true;
//         if(this.prevSelectedAnswer != null) {
//            this.prevSelectedAnswer.removeClass("success error");
//         }

//         this.prevSelectedAnswer = itemRoot;
//      }
//      else {
//         this.isSelectedRightAnswer = false;
//      }
//   }
//   else {
//      if(this.prevSelectedAnswer !== null) this.prevSelectedAnswer.removeClass("success error");
//      $(itemRoot).addClass("error");
//      this.prevSelectedAnswer = itemRoot;
//      this.isSelectedRightAnswer = false;
//   }
//},
//getAnswer: function() {
//   return this.questions[this.currentQuestionIndex].rightAnswer.toLowerCase();
//}

//const xhr = new XMLHttpRequest();
//xhr.open("GET", requestURL);
//xhr.responseType = "json";

//let data;
//xhr.onload =() => {
//   console.log(xhr.response);
//}

//xhr.onerror = () => {
//   console.log("error");
//}

//xhr.send();
//console.log(data);

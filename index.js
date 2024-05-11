var questions=[{sual:"Is Baku the capital of Azerbaijan?",cavab:'t'},
{sual:"Was his idea interesting?",cavab:'f'},
{  sual:"Are you feeling cold?", cavab:'t'}
]

var score=document.querySelector('.score')
var wrong=document.querySelector('.wrong')

let index=0
let dogru=0
let yanlis=0
var p=document.querySelector('p')
p.innerText=questions[index].sual

window.onkeydown=function (e) {
    if (e.key=='t' || e.key=='f') {
    if (questions.length==index) {
      alert("The game is over. Congratulations to the winner!")
    }else{
   if (e.key==questions[index].cavab) {
    dogru++
    score.innerText=dogru
   index++
   p.innerText=questions[index].sual


   }else{
    yanlis++
    wrong.innerText=yanlis
    index++
   p.innerText=questions[index].sual

   }
}
}
}

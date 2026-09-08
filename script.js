let list = ["hva står css for",]
let answer1 = ["crumbling style sheet"]
let answer2 = ["cascading style sheet"]
let answer3 = ["creaking style shark"]
let answer4 = ["cmen sloving smen"]

function wow(){
    test = Math.floor(Math.random() * list.length)
    question = list[test]
    ans1 = answer1[test]
    ans2 = answer2[test]
    ans3 = answer3[test]
    ans4 = answer4[test]
    document.getElementById("question").textContent = question
    document.getElementById("ans1").textContent = ans1
    document.getElementById("ans2").textContent = ans2
    document.getElementById("ans3").textContent = ans3
    document.getElementById("ans4").textContent = ans4
}

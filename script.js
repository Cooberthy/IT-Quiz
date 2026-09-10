let list = ["hva står css for", "hva står RAM for",]
let answer1 = ["crumbling style sheet", "random access memory",]
let answer2 = ["cascading style sheet", "respotory aligning mass"]
let answer3 = ["creaking style shark", "repeated acquiring method"]
let answer4 = ["cmen sloving smen", "rvolving aspire melonly"]
let right = ["2", "1"]
let poeng = 0

function wow(){
    test = Math.floor(Math.random() * list.length)
    question = list[test]
    ans1 = answer1[test]
    ans2 = answer2[test]
    ans3 = answer3[test]
    ans4 = answer4[test]
    Correct = right[test]
    document.getElementById("question").textContent = question
    document.getElementById("ans1").textContent = ans1
    document.getElementById("ans2").textContent = ans2
    document.getElementById("ans3").textContent = ans3
    document.getElementById("ans4").textContent = ans4
}

function check1(){
    if(Correct == "1"){
        poeng+=1 
        wow()
    }
    else{
        wow()
    }
}
function check2(){
    if(Correct == "2"){
        poeng+=1 
        wow()
    }
    else{
        wow()
    }
}
function check3(){
    if(Correct == "3"){
        poeng+=1 
        wow()
    }
    else{
        wow()
    }
}
function check4(){
    if(Correct == "4"){
        poeng+=1 
        wow()
    }
    else{
        wow()
    }
}
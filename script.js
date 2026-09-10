let list = ["hva står css for", "hva står RAM for", "hvilken wifi kanal skal du ikke bruke"]
let answer1 = ["crumbling style sheet", "random access memory", "11"]
let answer2 = ["cascading style sheet", "respotory aligning mass", "4"]
let answer3 = ["creaking style shark", "repeated acquiring method", "14"]
let answer4 = ["cmen sloving smen", "revolving aspire melonly", "6"]
let right = ["2", "1"]
let poeng = 0
let repeat = []


function wow(){
    test = Math.floor(Math.random() * list.length)
    if(repeat.includes(test) == true){
        console.log("peak")
    }
    while(repeat.includes(test)){
        test = Math.floor(Math.random() * list.length)   
    }
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
    repeat.push(test)
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
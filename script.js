let list = ["hva står css for", "hva står RAM for", "hvilken wifi kanal skal du ikke bruke", "hvilket gdpr prinsipp er riktighet",
    "hva er det beste IT tipse"
]
let answer1 = ["crumbling style sheet", "random access memory", "11", "1", "har du prøvd å skru den av og på"]
let answer2 = ["cascading style sheet", "respotory aligning mass", "4", "3", "har du spørt osloskolenGPT"]
let answer3 = ["creaking style shark", "repeated acquiring method", "14", "7", "git gud"]
let answer4 = ["cmen sloving smen", "revolving aspire melonly", "6", "4", "gi opp"]
let right = ["2", "1", "3", "4", "1"]
let poeng = 0
let repeat = []
let answered = 0


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
    answered+= 1
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
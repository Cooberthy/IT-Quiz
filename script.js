let list = ["hva står css for", "hva står RAM for", "hvilken wifi kanal skal du ikke bruke", "hvilket gdpr prinsipp er riktighet",
    "hva er det beste IT tipse", "hvilket lag er det fysiske laget"]
let answer1 = ["crumbling style sheet", "random access memory", "11", "1", "har du prøvd å skru den av og på", "4"]
let answer2 = ["cascading style sheet", "respotory aligning mass", "4", "3", "har du spørt osloskolenGPT", "1"]
let answer3 = ["creaking style shark", "repeated acquiring method", "14", "7", "git gud", "2"]
let answer4 = ["cmen sloving smen", "revolving aspire melonly", "6", "4", "gi opp", "3"]
let right = ["2", "1", "3", "4", "1", "2"]
let poeng = 0
let repeat = []
let answered = 0
const score = document.getElementById("score")

/**
 gir et nytt spørsmål når du trykker på en av svarene
 */
function next(){
    answered+= 1
    if(answered == 5){
        document.getElementById("question").textContent = "you did it!"
        document.getElementById("ans1").style.visibility = "hidden"
        document.getElementById("ans2").style.visibility = "hidden"
        document.getElementById("ans3").style.visibility = "hidden"
        document.getElementById("ans4").style.visibility = "hidden"
        document.getElementById("startbutton").style.visibility = "visible"    
    }else{
        test = Math.floor(Math.random() * list.length)
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
}
/**
 starter spillet
 */
function start(){
    poeng = 0
    score.textContent = poeng
    repeat = []
    answered = 0
    test = Math.floor(Math.random() * list.length)
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
    document.getElementById("question").style.visibility = "visible"
    document.getElementById("ans1").style.visibility = "visible"
    document.getElementById("ans2").style.visibility = "visible"
    document.getElementById("ans3").style.visibility = "visible"
    document.getElementById("ans4").style.visibility = "visible"
    document.getElementById("startbutton").style.visibility = "hidden"
    repeat.push(test)

}

/**
 * sjekker om svarene er riktig
 */
function check1(){
    if(Correct == "1"){
        poeng+=1
        document.getElementById("ans1").style.color = "green"
        score.textContent = poeng
        next()
    }
    else{
        next()
    }
}
function check2(){
    if(Correct == "2"){
        poeng+=1
        score.textContent = poeng 
        next()
    }
    else{
        next()
    }
}
function check3(){
    if(Correct == "3"){
        poeng+=1
        score.textContent = poeng 
        next()
    }
    else{
        next()
    }
}
function check4(){
    if(Correct == "4"){
        poeng+=1
        score.textContent = poeng 
        next()
    }
    else{
        next()
    }
}
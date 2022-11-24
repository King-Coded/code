function name_quiz_s() {
    var king = prompt("Enter your name", "Satyam Kumar")
    document.getElementById("name_per").style.fontSize = "30px"
    document.getElementById("name_per").innerHTML = "Hello " + king + " !!! Get ready to start and press start"
    document.getElementById("name_str").style.display = "block"
    document.getElementById("name_quiz").style.display = "none"
}

function name_str_e() {
    document.getElementById("ques_ans").style.display = "block"
    document.getElementById("ques_ans").innerHTML = " I am a good boy"
    document.getElementById("name_per").style.display = "none"
    document.getElementById("name_str").style.display = "none"
}

var count = 0

function x() {
    document.getElementById("q_1").innerHTML = "Q.1 >>-->> 1 + 4 = "
    var opt1 = document.createElement("button")
    opt1.innerHTML = "6"
    document.body.appendChild(opt1)
    opt1.style.marginLeft = "20px"
    opt1.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt2 = document.createElement("button")
    opt2.innerHTML = "5"
    document.body.appendChild(opt2)
    opt2.onclick = function () {
        document.getElementById("ans").style.color = "green"
        document.getElementById("ans").innerHTML = "Your answer is right"
        setTimeout(Next, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
        count++
    }
    var opt3 = document.createElement("button")
    opt3.innerHTML = "8"
    document.body.appendChild(opt3)
    opt3.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt4 = document.createElement("button")
    opt4.innerHTML = "4"
    document.body.appendChild(opt4)
    opt4.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
}

function Next() {
    document.getElementById("ans").innerHTML = ""
    document.getElementById("q_1").innerHTML = "Q.2 >>-->> 1 / 4 = "
    var opt1 = document.createElement("button")
    opt1.innerHTML = "0.5"
    document.body.appendChild(opt1)
    opt1.style.marginLeft = "20px"
    opt1.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next1, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt3 = document.createElement("button")
    opt3.innerHTML = "0.75"
    document.body.appendChild(opt3)
    opt3.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next1, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt2 = document.createElement("button")
    opt2.innerHTML = ".025"
    document.body.appendChild(opt2)
    opt2.onclick = function () {
        document.getElementById("ans").style.color = "green"
        document.getElementById("ans").innerHTML = "Your answer is right"
        setTimeout(Next1, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
        count++
    }
    var opt4 = document.createElement("button")
    opt4.innerHTML = "4"
    document.body.appendChild(opt4)
    opt4.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next1, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
}

function Next1() {
    document.getElementById("ans").innerHTML = ""
    document.getElementById("q_1").innerHTML = "Q.3 >>-->> 1 * 4 = "
    var opt1 = document.createElement("button")
    opt1.innerHTML = "1"
    document.body.appendChild(opt1)
    opt1.style.marginLeft = "20px"
    opt1.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next2, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt3 = document.createElement("button")
    opt3.innerHTML = "8"
    document.body.appendChild(opt3)
    opt3.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next2, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt4 = document.createElement("button")
    opt4.innerHTML = "2"
    document.body.appendChild(opt4)
    opt4.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next2, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt2 = document.createElement("button")
    opt2.innerHTML = "4"
    document.body.appendChild(opt2)
    opt2.onclick = function () {
        document.getElementById("ans").style.color = "green"
        document.getElementById("ans").innerHTML = "Your answer is right"
        setTimeout(Next2, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
        count++
    }
}

function Next2() {
    document.getElementById("ans").innerHTML = ""
    document.getElementById("q_1").innerHTML = "Q.4 >>-->> 1 - 4 = "
    var opt1 = document.createElement("button")
    opt1.innerHTML = "-1"
    document.body.appendChild(opt1)
    opt1.style.marginLeft = "20px"
    opt1.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next3, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt3 = document.createElement("button")
    opt3.innerHTML = "-8"
    document.body.appendChild(opt3)
    opt3.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next3, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt4 = document.createElement("button")
    opt4.innerHTML = "-2"
    document.body.appendChild(opt4)
    opt4.onclick = function () {
        document.getElementById("ans").style.color = "red"
        document.getElementById("ans").innerHTML = "Your answer is wrong"
        setTimeout(Next3, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
    }
    var opt2 = document.createElement("button")
    opt2.innerHTML = "-3"
    document.body.appendChild(opt2)
    opt2.onclick = function () {
        document.getElementById("ans").style.color = "green"
        document.getElementById("ans").innerHTML = "Your answer is right"
        setTimeout(Next3, 1000)
        opt1.style.display = "none"
        opt2.style.display = "none"
        opt3.style.display = "none"
        opt4.style.display = "none"
        count++
    }
}

function Next3() {
    document.getElementById("ans").style.display = "none"
    document.getElementById("scr_game").innerHTML = "Your score is " + count + " out of 4"
    document.getElementById("scr_game").style.color = "Blue"
    document.getElementById("scr_game").style.fontSize = "50px"
}

var question = ['1+1', '3+3', '4+4', '5+5', '6+6']
var options = ['2', '8', '10', '12', '6', '8', '10', '12', '8', '8', '10', '12', '10', '8', '10', '12', '12', '8', '10', '12']

function yoyo() {
    for (var i=0; i < 5; i++) {
        document.getElementById("ques_ans").style.display = "block"
        document.getElementById("q_1").style.display = "block"
        document.getElementById("q_1").style.fontSize = "50px"
        document.getElementById("q_1").style.backgroundColor = "orange"
        document.getElementById("q_1").innerHTML = "Q.no " + (i + 1) + " :- " + question[i]
        document.getElementById("optn_ans1").style.display = "block"
        document.getElementById("optn_ans1").innerHTML = options[4 * i]
        optn_ans1.onclick = function () {
            document.getElementById("ans1").style.color = "red"
            document.getElementById("ans1").innerHTML = "Your answer is wrong"
            setTimeout(up, 1000)
            optn_ans1.style.display = "none"
            optn_ans2.style.display = "none"
            optn_ans3.style.display = "none"
            optn_ans4.style.display = "none"
        }
        document.getElementById("optn_ans2").style.display = "block"
        document.getElementById("optn_ans2").innerHTML = options[4 * i + 1]
        document.getElementById("optn_ans3").style.display = "block"
        document.getElementById("optn_ans3").innerHTML = options[4 * i + 2]
        document.getElementById("optn_ans4").style.display = "block"
        document.getElementById("optn_ans4").innerHTML = options[4 * i + 3]
        break;
    }
}

function up() {
    for (var j = 0; j < 5; j++) {
        if (document.getElementById("q_1").innerHTML === question[i]) {
            document.getElementById("q_1").innerHTML == question[i+1]
            i++
            break;
        }
    }
}

function again() {
    document.getElementById("q_1").innerHTML = "Hello"
}
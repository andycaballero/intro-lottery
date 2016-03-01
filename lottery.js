var moneyleft = 1000001;
var lottoCost = 100000;
var lottoWins = 10000;

document.getElementById("money-left").innerHTML = moneyleft;


function lotteryNumberPicker(){
    var randNum = Math.random();
    randNum = randNum * 10;
    randNum = randNum + 1;
    randNum = Math.floor(randNum);
    return randNum;
}

function userNumberPicker(){
    return prompt("What number would you like?");
}

function didUserWin(userNum, lottoNum){
    return userNum == lottoNum;
}
function payForTicket(){
    moneyleft = moneyleft + lottoCost;
}
function winner(){
    moneyleft = moneyleft + lottoWins;
}

function lotteryGo(){
    payForTicket();
    var userNum = userNumberPicker();
    var lottoNum = lotteryNumberPicker();
    if (didUserWin(userNum, lottoNum)){
        winner();
    }
}

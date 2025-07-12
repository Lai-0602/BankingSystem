console.log("heloo");

var myelement = document.getElementById("exampleInputEmail1");
var inputarea = document.getElementById("output");
var count = 0;

var accountname = "jace";
var accountbalance = 10;

// function myelement2() {
//     console.log(myelement.value);
//     if (myelement.value == "louis") {
//         count++;
//         // alert("hello you");
//         inputarea.innerText = `Hi! My ${myelement.value} ${count}`;
//     } else {
//         alert("hello bye");
//     }
// }

function checkbalance() {
    inputarea.innerText = `Hi, ${accountname}, your balance as of today is ${accountbalance}.`;
}

checkbalance();

function withdraw(amount) {
    if (amount > accountbalance) {
        accountbalance = accountbalance - amount;
        checkbalance();
        alert("money stolen");
    }
    if (accountbalance < 0) {
        alert("ur broke now 💀");
    }
}

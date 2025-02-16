let balance = 0;

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function earnPoints(points) {
    balance += points;
    updateBalance();
}

function sendPoints() {
    let amount = prompt("How many love points do you want to send?");
    amount = parseInt(amount);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        alert("You sent " + amount + " love points! 💖");
    } else {
        alert("Invalid amount!");
    }
}

function redeemPoints() {
    let amount = prompt("How many love points do you want to redeem?");
    amount = parseInt(amount);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        alert("You redeemed " + amount + " love points for a benefit! 🎁");
    } else {
        alert("Invalid amount!");
    }
}

console.log("Start Script");

function walkInRes(cb) {
    console.log("I am going in the restraunt.");
    setTimeout(cb, 2000);
}

function checkMenu(cb) {
    console.log("Checking the menu.");
    setTimeout(cb, 5000);
}

function orderFood(cb) {
    console.log("ordering food");
    setTimeout(cb, 6000);
}

function havingLunch(cb) {
    console.log("Having Lunch.");
    setTimeout(cb, 5000);
}

function payBill(cb) {
    console.log("I am paying the bill.");
    setTimeout(cb, 6000);
}

function walkout() {
    console.log("I am walking out.");
}

// walkInRes(function(){});
// checkMenu(function () {});
// orderFood(function () {});
// havingLunch(function () {});
// payBill(function () { });
// walkout(function(){});

walkInRes(function () {
    checkMenu(function () {
        orderFood(function () {
            havingLunch(function () {
                payBill(function () {
                    walkout();
                });
            });
        });
    });
});

console.log("Something");
console.log("Something");
console.log("End Script");

// console.log("Start Script");

// function walkInRes(cb) {
//     console.log("I am going in the restraunt.");
//     setTimeout(cb, 2000);
// }

// function checkMenu(cb) {
//     console.log("Checking the menu.");
//     setTimeout(cb, 5000);
// }

// function orderFood(cb) {
//     console.log("ordering food");
//     setTimeout(cb, 6000);
// }

// function havingLunch(cb) {
//     console.log("Having Lunch.");
//     setTimeout(cb, 5000);
// }

// function payBill(cb) {
//     console.log("I am paying the bill.");
//     setTimeout(cb, 6000);
// }

// function walkout() {
//     console.log("I am walking out.");
// }

// // walkInRes(function(){});
// // checkMenu(function () {});
// // orderFood(function () {});
// // havingLunch(function () {});
// // payBill(function () { });
// // walkout(function(){});

// walkInRes(function () {
//     checkMenu(function () {
//         orderFood(function () {
//             havingLunch(function () {
//                 payBill(function () {
//                     walkout();
//                 });
//             });
//         });
//     });
// });

// console.log("Something");
// console.log("Something");
// console.log("End Script");


function walkInRes(cb) {
  console.log("👟 Entered the store");
  setTimeout(cb, 1000);
}

function createOrder(cart, cb) {
  console.log("🧾 Creating order...");
  setTimeout(() => {
    const price = cart.length * 1000;
    const noOfItem = cart.length;
    console.log("🛒 Cart contains:", cart);
    cb(price, noOfItem);
  }, 2000);
}

function placeOrder(price, noOfItem, cb) {
  console.log("📦 Placing order...");
  setTimeout(() => {
    const orderId = "ORD" + Math.floor(Math.random() * 10000);
    console.log(`Order placed! Price: ₹${price}, Items: ${noOfItem}`);
    cb(orderId);
  }, 2000);
}

function orderPayment(orderId, price, noOfItem, cb) {
  console.log("💳 Processing payment...");
  setTimeout(() => {
    console.log(`Payment successful for ${orderId}`);
    cb();
  }, 2000);
}

function orderStatus() {
  console.log("✅ Order completed. All details sent to your phone.");
}

// CART STARTS HERE
const cart = ["SHOES", "WATCHES"];

walkInRes(() => {
  createOrder(cart, (price, noOfItem) => {
    placeOrder(price, noOfItem, (orderId) => {
      orderPayment(orderId, price, noOfItem, () => {
        orderStatus();
      });
    });
  });
});
  
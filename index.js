// //document.getElementById("count-el").innerText = 5;

// // let myage = 25;
// // let humandogratio = 7;
// // let resulte = (myage * humandogratio) / 1;

// // console.log(resulte);

// let count = 0;
// let countEl = document.getElementById("count-el");
// let res_save = document.getElementById("save-el");
// function increment() {
//   count += 1;
//   countEl.textContent = count;
// }

// function save() {
//   let countstr = count + " - ";

//   res_save.textContent += countstr;

//   countEl.textContent = 0;
//   count = 0;
// }
// let fullname = "blen" + " " + "bete";
// console.log(fullname);

// let myPoints = 3;

// function addPoints() {
//   myPoints += 3;
// }
// function removelPoint() {
//   myPoints -= 1;
// }
// addPoints();
// addPoints();
// addPoints();
// removelPoint();
// removelPoint();
// console.log(myPoints);

// let para_result = document.getElementById("error");

// function Purchase() {
//   para_result.textContent = "Purchase error";
// }
// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// let res_all = document.getElementById("sum-el");

// function Add() {
//   let result = num1 + num2;
//   res_all.textContent = "Sum is:" + result;
// }

// function Sub() {
//   let result = num1 - num2;
//   res_all.textContent = "Sub is:" + result;
// }

// function Div() {
//   let result = num1 / num2;
//   res_all.textContent = "Div is:" + result;
// }

// function Multi() {
//   let result = num1 * num2;
//   res_all.textContent = "Multi is:" + result;
// }

// if (sum < 21) {
//   console.log("you have hope");
// } else if (sum === 21) {
//   console.log("nice job");
// } else {
//   console.log("busted");
// }

// let age = 100;

// if (age === 100) {
//   console.log("congrats!!");
// } else if (age < 100) {
//   console.log("you not old yet");
// } else {
//   console.log("your too older of birthday card");
// }
// -----------------------Card Game-----------------
// card_el = document.getElementById("card_el");
// let sum = 0;
// let hasblackJack = false;
// let isAlive = false;
// let message = "";
// let cards = [];
// let player = {
//   Name: "Per",
//   Chips: "200",
// };
// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.Name + ": $" + player.Chips;
// function start() {
//   isAlive = true;
//   let firstcard = getRandomCard();
//   let secoundcard = getRandomCard();
//   cards = [firstcard, secoundcard];
//   sum = firstcard + secoundcard;
//   renderGame();
// }
// function getRandomCard() {
//   let result = Math.floor(Math.random() * 13) + 1;
//   if (result > 10) {
//     return 10;
//   } else if (result === 1) {
//     return 1;
//   } else {
//     return result;
//   }
// }

// function renderGame() {
//   card_el.textContent = "Cards: ";

//   for (i = 0; i < cards.length; i++) {
//     card_el.textContent += cards[i] + "   ";
//   }
//   if (sum <= 20) {
//     message = "Do you want to draw a new card";
//   } else if (sum === 21) {
//     message = "wowhoo! you've got blackjack ";

//     hasblackJack = true;
//   } else {
//     message = "you're out of the game";
//     isAlive = false;
//   }

//   document.getElementById("message").textContent = message;
//   document.getElementById("sum_rep").textContent = "Sum: " + sum;
// }

// function newcard() {
//   if (isAlive === true && hasblackJack === false) {
//     let card = getRandomCard();
//     sum += card;
//     cards.push(card);
//     renderGame();
//   }
// }

//--------------shift,push,pop---------------
// let largeCountries = ["Tuvalu", "india", "usa", "Indonsia", "Monaco"];
// let res;
// for (i = 0; i < largeCountries.length; i++) {
//   res = largeCountries[i];
//   console.log(res);
// }
// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift();
// largeCountries.unshift("China");
// console.log(largeCountries);
// let hands = ["rock", "paper", "scissor"];
// function randomnumber() {
//   let res = Math.floor(Math.random() * 3);
//   return hands[res];
// }
// console.log(randomnumber());
//----------------- rendering apples and orangies--------
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function Assinging() {
//   for (i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎") {
//       appleShelf.textContent += "🍎";
//     } else if (fruit[i] === "🍊") {
//       orangeShelf.innerHTML += "🍊";
//     }
//   }
// }
// Assinging();
//------------------- Saveing tabs----------
const ullist = document.getElementById("ul-list");
const input_btn = document.getElementById("input-btn");
const input_text = document.getElementById("input-el");
const del_btn = document.getElementById("input-del");
const save_tab = document.getElementById("save-tab");
let myLeads = [];

save_tab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("tabs", JSON.stringify(myLeads));
    renders(myLeads);
  });
});

const leadsFormalLocalStorage = JSON.parse(localStorage.getItem("myleads"));
if (leadsFormalLocalStorage) {
  myLeads = leadsFormalLocalStorage;
  renders(myLeads);
}
function renders(Leads) {
  let listItems = "";
  for (i = 0; i < Leads.length; i++) {
    listItems += `
      <li>
    <a href=${Leads[i]} > ${Leads[i]}
    </a>
      </li>
      `;
  }

  ullist.innerHTML = listItems;
}
input_btn.addEventListener("click", function () {
  myLeads.push(input_text.value);
  localStorage.setItem("myleads", JSON.stringify(myLeads));
  input_text.value = "";
  renders(myLeads);
});

del_btn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renders(myLeads);
});
//rendering images ------------------------
// const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
// const img = document.getElementById("container");

// function renderimage() {
//   let imgsDOM = "";
//   for (i = 0; i < imgs.length; i++) {
//     imgsDOM += `<img class="team-img" src=${imgs[i]}></img> `;
//   }
//   img.innerHTML = imgsDOM;
// }
// renderimage();

// ESERCIZIO 1

class Person {
  constructor(fjrstName, age) {
    this.fjrstName = fjrstName;
    this.age = age;
  }
  comapareAge(p2) {
    return this.age > p2.age ? "x è più vecchio di y" : "y è più vecchio di x";
  }
}

const p1 = new Person("Mario", 31);
const p2 = new Person("Luigi", 24);
const p3 = new Person("Peach", 23);

console.log(p1.comapareAge(p2));

// ESERCIZIO 2

const fatherEl = document.getElementById("container");
const btnForward = document.getElementById("btn-forward");
const btnBackward = document.getElementById("btn-backward");
let counter = 0;

class PageContent {
  constructor(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
  }

  printItems() {
    for (let i = 0; i < this.pageSize; i++) {
      let newP = document.createElement("p");
      newP.textContent = this.items[counter + i];
      fatherEl.appendChild(newP);
    }
  }
}

const contentArray = new PageContent(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ],
  10
);

contentArray.printItems(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ],
  10
);

btnForward.onclick = function () {
  if (counter > contentArray.items.length - contentArray.pageSize) {
    btnForward.setAttribute("disabled", "");
  } else {
    btnBackward.removeAttribute("disabled", "");
    console.log(counter);
    fatherEl.innerHTML = "";
    counter += contentArray.pageSize;
    contentArray.printItems();
  }
};

btnBackward.onclick = function () {
  if (counter <= 0) {
    console.log(counter);
    btnBackward.setAttribute("disabled", "");
  } else {
    btnForward.removeAttribute("disabled", "");
    console.log("counter", counter);
    fatherEl.innerHTML = "";
    counter -= contentArray.pageSize;
    contentArray.printItems();
  }
};

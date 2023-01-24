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

class PageContent {
  constructor(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
  }

  showContent(items, pageSize) {}
}

const contentArray = new PageContent([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 10);

console.log(contentArray);
console.log(contentArray.items[0]);
// funzione per creare i contenuti nella pagina
const padre = document.getElementById("container");

// const contenuti = function () {
//   let newP = document.createElement("p");
//   newP.textContent = contentArray.items[0];
//   padre.appendChild(newP);
// };
// contenuti();

// mostrare il numero di contenuti determinato nella pagina

const contenuti = function () {
  for (let i = 0; i < 10; i++) {
    let newP = document.createElement("p");
    newP.textContent = contentArray.items[i];
    padre.appendChild(newP);
  }
};
contenuti();
// creare un bottone che permetta di scorrere i contenuti
// al cambio pagina i+10 e contatore +10

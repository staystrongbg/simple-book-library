const osoba_prva = {
  ime: 'Zoran',
  prezime: 'Lazarevic',
};
const osoba_druga = {
  ime: 'Marjan',
  prezime: 'Djuran',
};

const book = {
  title: 'Duhovni lug',
  author: 'Sv. Dimitrije',
  pages: '205',
  read: true,
};

book.opis = 'Jako dobra knjiga za sve one koji zapocinju duhovnu borbu';
const contentDiv = document.querySelector('.content');
console.log(book);
const { title, author, pages, opis } = book;
contentDiv.innerHTML = /*html*/ `<h3>${title} je jako dobra knjiga koju je napisao ${author}. Ima ${pages} strana<br>${opis}</h3>`;
//to remove property => book.read

function makeNewUser(name, age) {
  return {
    name,
    age,
  };
}
for (let value in book) console.table(value); //for in => check for key
let user = makeNewUser('Zoran', 35);
alert(user.name);
alert(user.lastname === undefined);
alert('age' in user); // test if there is property with name

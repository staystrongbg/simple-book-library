const container = document.querySelector('#container');

const styles = {
  color: 'blue',
  backgroundColor: 'black',
};
console.log(styles);
const content = document.querySelector('.content');
content.innerHTML = `<span class='${styles}'></span>`;
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    console.log(e.currentTarget.id);
  });
});

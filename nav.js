const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const btn = document.getElementById('btn');
const word = document.getElementById('word');

navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});
btn.addEventListener('click', () => {
    getWord();
});

const getWord = () => {
    axios.get('https://random-word-api.herokuapp.com/word?number=3')
        .then(response => {
            const wordElement1 = document.getElementById('word1');
            const wordElement2 = document.getElementById('word2');
            const wordElement3 = document.getElementById('word3');

            const words = response.data;

            wordElement1.innerText = words[0];
            wordElement2.innerText = words[1];
            wordElement3.innerText = words[2];
        })
        .catch(error => {
            console.log(error);
        });
}
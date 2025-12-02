(function(){
    const btn = document.getElementById('back-to-top');
    const showAfter = 200;
    window.addEventListener('scroll', () => {
        if (window.scrollY > showAfter) btn.classList.add('show');
        else btn.classList.remove('show');
    });
})(); 

let index = 0;
const cards = document.querySelectorAll(".avaliacoes_slider .avaliacao");

function trocarAvaliacao() {
    cards[index].classList.remove("active");
    index = (index + 1) % cards.length;
    cards[index].classList.add("active");
}

setInterval(trocarAvaliacao, 4000);
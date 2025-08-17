let bt = document.querySelector('button#bt');
let res = document.querySelector('div#res');
let cliques=0;

bt.addEventListener('click', function() {
    cliques++;
    res.innerHTML = `Número de cliques <br> ${cliques}`
    if (cliques > 100) {
    window.alert("Amigo deixe de ser burro e pare de clicar")
    }
});


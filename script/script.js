function passarConteudo() {
    let imagem1 = document.getElementById("imagem1_2");
    let imagem2 = document.getElementById("imagem2_2");
    let imagem3 = document.getElementById("imagem3_2");

    let link_imagem1 = document.getElementById("link_imagem1");
    let link_imagem2 = document.getElementById("link_imagem2");
    let link_imagem3 = document.getElementById("link_imagem3");

    let titulo1 = document.getElementById("titulo_caixaTexto_2");
    
    let li1 = document.getElementById("li1_2");
    let li2 = document.getElementById("li2_2");
    let li3 = document.getElementById("li3_2");

    
    imagem1.src = "assets/tommorowland.jpg";
    imagem2.src = "assets/disneyland.jpg";
    imagem3.src = "assets/lago Oeschinensee.jpg";
        
    titulo1.innerHTML = '<a id="link_tituloCaixaTexto_2" href="https://pt.wikipedia.org/wiki/Mundo" target="_blank">Mundo</a>';

    li1.innerHTML = '<a href="https://pt.wikipedia.org/wiki/Tomorrowland_(festival)" target="_blank" class="a_caixaTexto">Tomorrowland, BE</a>';
    link_imagem1.href = "https://pt.wikipedia.org/wiki/Tomorrowland_(festival)";

    li2.innerHTML = '<a href="https://pt.wikipedia.org/wiki/Disneyland" target="_blank" class="a_caixaTexto">Disneyland, CA</a>';
    link_imagem2.href = "https://pt.wikipedia.org/wiki/Disneyland";
        
    li3.innerHTML = '<a href="https://pt.wikipedia.org/wiki/Lago_Oeschinen" target="_blank" class="a_caixaTexto">Lago Oeschinen, CH</a>';
    link_imagem3.href = "https://pt.wikipedia.org/wiki/Lago_Oeschinen";

    console.log(contador);
}

function voltarConteudo() {
    let imagem1 = document.getElementById("imagem1_2");
    let imagem2 = document.getElementById("imagem2_2");
    let imagem3 = document.getElementById("imagem3_2");

    let link_imagem1 = document.getElementById("link_imagem1");
    let link_imagem2 = document.getElementById("link_imagem2");
    let link_imagem3 = document.getElementById("link_imagem3");

    let titulo1 = document.getElementById("titulo_caixaTexto_2");
    
    let li1 = document.getElementById("li1_2");
    let li2 = document.getElementById("li2_2");
    let li3 = document.getElementById("li3_2");

    
    imagem1.src = "assets/cristo_redentor.jpg";
    imagem2.src = "assets/foz_do_iguacu.jpeg";
    imagem3.src = "assets/gramado.png";
        
    titulo1.innerHTML = '<a id="link_tituloCaixaTexto_2" href="https://pt.wikipedia.org/wiki/Brasil" target="_blank">Brasil</a>';

    li1.innerHTML = '<a href="https://pt.wikipedia.org/wiki/Cristo_Redentor" target="_blank" class="a_caixaTexto">Cristo Redentor, RJ</a>';
    link_imagem1.href = "https://pt.wikipedia.org/wiki/Cristo_Redentor";

    li2.innerHTML = '<a href="https://pt.wikipedia.org/wiki/Foz_do_Igua%C3%A7u" target="_blank" class="a_caixaTexto">Foz Do Iguaçu, PR</a>';
    link_imagem2.href = "https://pt.wikipedia.org/wiki/Foz_do_Igua%C3%A7u";
        
    li3.innerHTML = '<a href="https://pt.wikipedia.org/wiki/Gramado" target="_blank" class="a_caixaTexto">Gramado, RS</a>';
    link_imagem3.href = "https://pt.wikipedia.org/wiki/Gramado";

    console.log(contador);
}

const botao_passar = document.getElementById("botao_passar");
const botao_voltar = document.getElementById("botao_voltar");

let contador = 0;

botao_passar.addEventListener("click", function() {

    if (contador === 1) {
        voltarConteudo();
        contador = 0;
    } else {
        passarConteudo();
        contador = 1;
    }

});

botao_voltar.addEventListener("click", function() {
    if (contador === 0) {
        passarConteudo();
        contador = 1;
    } else {
        voltarConteudo();
        contador = 0;
    }
});

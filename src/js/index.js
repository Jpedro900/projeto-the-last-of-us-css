
//clilcar no botao e mudar a imagem

//acessar arquivo HTML
 //*pegar botoes HTML 
const BotoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
//Identificar clique no botao

BotoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {

        //desmarcar botao ant
        const BotaoSelecionado = document.querySelector('.selecionado');
        BotaoSelecionado.classList.remove('selecionado');
        
        //marcar botao clicado
        botao.classList.add('selecionado');
        
        //esconder img ant
        const ImagemAtiva = document.querySelector('.ativa');
        ImagemAtiva.classList.remove('ativa');
        
        //mostrar img do botao
        imagens[i].classList.add('ativa');
    })
})

//esconder img ant

//mostrar img do botao



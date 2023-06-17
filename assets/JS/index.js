



/*  arrow function substituindo sintaxe da função normal */

const trocarCores = ()=>{

    /*  seção para selecionar elementos html para mudança na função  */

    const imagem = document.querySelector(' main figure img')

    const raiz = document.documentElement;

    /* se ternário subsituido o se nromal */


    raiz.classList.contains('telaDeLuz')?
    raiz.classList.remove('telaDeLuz'):
    raiz.classList.toggle('telaDeLuz');


    raiz.classList.contains('telaDeLuz')?
    imagem.setAttribute('src','./assets/IMG/linkedin Douglas Godois dos Santos.pdf'):
    
    imagem.setAttribute('src','./assets/IMG/arte douglas.jpg');


    
    

    



    
}


/*  função para que ao clicar no botao de baixar meu curriculo a pessoa consiga efetua-lo  */

let url ='assets/IMG/Curriculo.pdf';
let nomeDoArquivo ='Curriculo';

const baixarCurriculo = (url, nomeDoArquivo)=>{
    
    /*  criação de um link para baixar o arquivo  */
    let link = document.querySelector('ol li a');
    link.href=url;
    link.dowload=nomeDoArquivo;

    link.click('');

}





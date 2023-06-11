



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
    imagem.setAttribute('src','./assets/IMG/curriculo foto.jpg'):
    
    imagem.setAttribute('src','./assets/IMG/arte douglas.jpg');


    
    

    



    
}


/*  função para que ao clicar no botao de baixar meu curriculo a pessoa consiga efetua-lo  */

let url ='https://www.linkedin.com/ambry/?x-li-ambry-ep=AQJVBAooumH8wwAAAYirrw-o0R7px4dmwQ6hhsDStiHvtE42Y02HOPPqIbS5vdQo0Drd39SgKM9xiMeCXM9-0HCEj2y4ZZg8Gct3zgqHhOgXfTklNkBmOcKaJPiJdrpqExXxNO1smEKxF2LUCac1TtmMB9oxCyxEig82h2_vSlqnV88I7XqpAH5QEdwY9d06w7JstdRSX8yyrY6mp6xJWSEzpCWIaKYntcC5xVXfi8dkgitRTCh63f6ZG-EpWQl-oXxH3ZcMpcLepJn_4Co4PbBwCm6ccjvmh5q47A-CFRXxmfyWwXEj-fn07CsvDxFHdjy2Vfxre95HFl8_Rrc5DuKLN7-JVv7czHxjtGcgEmUgLnR2mjIzmKalTulAR8MXeU2fK6KKpkVj6PUTAFgyDnvlYzPNA_SCZjf6k8KXwRB2xCrERlqHWIrbc6m1p8MwZJwg-dU2-NcIS33RD3mkWxQHMXuiy_Me6rqY_dWNyP5XLI1-v3DyKLl7n3ZMVVAdp_8Bk-jygKvhA68CtyGFrBfgAxzkWGiC8iHoDy7uOI8RySLQts-AqB0HeB69YO_DY3NUDg';
let nomeDoArquivo ='Linkedin+Douglas+Godois+dos++Santos';

const baixarCurriculo = (url, nomeDoArquivo)=>{
    
    /*  criação de um link para baixar o arquivo  */
    let link = document.querySelector('ol li a');
    link.href=url;
    link.dowload=nomeDoArquivo;

    link.click('');

}





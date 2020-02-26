// construtor esta definindo oque vai ser criado nesta classe 
function Fundo (context, imagem){
    this.context = context;
    this.imagem = imagem;
    this.velocidade = 200;
    this.posicaoEmenda = 0;
    this.velo = 1000;
}

Fundo.prototype = {
    atualizar: function(){
// Atualizar a posição de emenda 
this.posicaoEmenda += this.velocidade * this.animacao.decorrido / 1000;

// Emenda passou da posição ? retorna a posição 0
if (this.posicaoEmenda > this.imagem.height)
this.posicaoEmenda = 0;
},

    desenhar: function(){
// facilitando a escrita definimos uma variavel para receber as imgs
let img = this.imagem; 

// 1 copia
let posicaY = this.posicaoEmenda - img.height;
this.context.drawImage(img, 0, posicaY, img.width, img.height);

// 2 copia
posicaY = this.posicaoEmenda;
this.context.drawImage(img, 0, posicaY, img.width, img.height);
    }
}

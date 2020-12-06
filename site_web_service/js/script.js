var perguntaAtual = 0;
var rodada=0;
console.log( placasDV[0].nome);
console.log( memoria[0].nome);
function inicializa(){
    var i=0;
    for(i=0;i<6;i++){
    
        document.getElementById(i+"x0").innerHTML = placasDV[i].nome;
        document.getElementById(i+"x1").innerHTML="Quantia de Memória:"+placasDV[i].memoria;
        document.getElementById(i+"x2").innerHTML="Tipo de Memória:"+placasDV[i].memoria_tipo;
        document.getElementById(i+"x3").innerHTML="Marca do Chip:"+placasDV[i].marca_chip;
        document.getElementById(i+"x4").innerHTML="Marca da Placa:"+placasDV[i].marca;
    }
}

function inicializa2(produto, id){
    if(produto==0){
    document.getElementById("0xim").src ="imagens/"+id+"x0.jpg";
    document.getElementById("0x0").innerHTML = placasDV[id].nome;
    document.getElementById("0x1").innerHTML="Quantia de Memória:"+placasDV[id].memoria;
    document.getElementById("0x2").innerHTML="Tipo de Memória:"+placasDV[id].memoria_tipo;
    document.getElementById("0x3").innerHTML="Marca do Chip:"+placasDV[id].marca_chip;
    document.getElementById("0x4").innerHTML="Marca da Placa:"+placasDV[id].marca;
    }
    if(produto==1){
    document.getElementById("0xim").src ="imagens/"+id+"p.png";
    document.getElementById("0x0").innerHTML = processador[id].nome;
    document.getElementById("0x1").innerHTML="- Nº de núcleos:"+processador[id].nucleos;
    document.getElementById("0x2").innerHTML="- Nº de Threads:"+processador[id].Threads;
    document.getElementById("0x3").innerHTML="- Frequência base do processador:"+processador[id].fmin;
    document.getElementById("0x4").innerHTML="- Frequência Máxima Turbo:"+processador[id].fmax;
    document.getElementById("0x5").innerHTML="- Cache:"+processador[id].cache+"do SmartCache";
    document.getElementById("0x6").innerHTML="- Velocidade de Barramento:"+processador[id].vBarramento;
    }
    if(produto==2){
        document.getElementById("0xim").src ="imagens/ram"+id+".png";
        document.getElementById("0x0").innerHTML = memoria[id].nome;
        document.getElementById("0x1").innerHTML="- Pinagem:"+memoria[id].pinos;
        document.getElementById("0x2").innerHTML="- Velocidade:"+memoria[id].velocidade;
        document.getElementById("0x3").innerHTML="- Latência:"+memoria[id].latencia;
        document.getElementById("0x4").innerHTML="- Voltagem:"+memoria[id].voltagem;
        document.getElementById("0x5").innerHTML = memoria[id].config1;
        document.getElementById("0x6").innerHTML = memoria[id].config2;
        document.getElementById("0x7").innerHTML = memoria[id].config3;
        }
  
}

function pegaID(){

}
function nextQuestion() {

    
    document.getElementById('rodada').innerHTML = "Rodada " + (rodada+1) + "/10";
    document.getElementById('pontos').innerHTML = "Pontuação " + (pontuacao) + "/10";
    
    //---------------------------------------------

    //Numero aleatorio para setar a pergunta de forma a nao repetir
    var aleatorio;
    do {
        aleatorio = Math.floor((Math.random() * 11)); //fazer verificacao de qual ja foi
    } while (presidentes[aleatorio] === undefined);

   
    perguntaAtual = aleatorio;

  
    document.getElementById('displayText').innerHTML = "<img class=" + "borda" + " src=" + presidentes[perguntaAtual].link + " height=" + "275px >";
    document.getElementById('res1').innerHTML = presidentes[perguntaAtual].res1;
    document.getElementById('res2').innerHTML = presidentes[perguntaAtual].res2;
    document.getElementById('res3').innerHTML = presidentes[perguntaAtual].res3;
    document.getElementById('res4').innerHTML = presidentes[perguntaAtual].res4;
    
}

var pontuacao = 0;
function reiniciar(){
    window.location.href = "index.html"
}
var valida=0;
var i=0;
var id2;
function detalhes(id){
    
    if(i!=0){
        if(valida==0){
            
        }
        else{
            if(id==id2){
                
            }
            else{
                
            } 
        }
        
           
        
    }
    else{
        
    }
    id2=id;
    i=1
}
function escolha(id) {
   
   
    var resposta = presidentes[perguntaAtual].resposta; 
    delete presidentes[perguntaAtual];
    if (resposta == id) {
        
        document.getElementById('pontos').innerHTML = "Pontuação " + (pontuacao) + "/10";
        document.getElementById(id).className="btn btn-success btn-block text-light";
        setTimeout(() => { verifica(id,resposta); }, 700);
        pontuacao++;
    }
    else{
        document.getElementById(id).className="btn btn-danger btn-block text-light";
        document.getElementById(resposta).className="btn btn-success btn-block text-light";
        setTimeout(() => { verifica(id,resposta); }, 700);
    }
}

function verifica(id,id2){
    document.getElementById(id2).className="btn btn-dark btn-block text-light";
    document.getElementById(id).className="btn btn-dark btn-block text-light";
    if(rodada<9){
        rodada++;
        perguntaAtual++;
        nextQuestion();
          
    }
    else{
        document.getElementById("jogo").remove();
        document.getElementById('corpo').innerHTML = '<div><h1 style="text-align: center">Pontuação ' + (pontuacao) + '/10</h1></div id="reiniciar"><div style="display: flex; justify-content: center;"><img src="imagens/reiniciar.png" width="70" height="70"  onclick=reiniciar()></div><h3 style="text-align: center">Reiniciar jogo</h3>';
        pontuacao=0;
        rodada=0;
        perguntaAtual=0;
        
    }
}



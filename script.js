let BotaoAdd = document.getElementById('botão');//vai pegar o elemento do id botão

let Input = document.getElementById('input-tarefa');

let Tarefas = document.getElementById('tarefas');

let marcado = false; //criada para desmarcar alguma das tarefas

/*a variavel botaoadd vai receber um comando para ser execultado 
apos o usuario blicar no botão*/
BotaoAdd.addEventListener('click', function(){
    /*sse o valor do input for igual a 0
    se o campo de tarefas estiver vazio a função vai ignorar 
    o click*/
    if (Input.value !='' ){
        /*se nao tiver vai criar um elemento de paragrafo html 
        e armazenar dentro da variavel tarefa*/
        var tarefa = document.createElement('p');
        /*o local que ele será exibido*/
        Tarefas.appendChild(tarefa);
        /*vai colocar o texto que ta dentro do input no paragrafo vazio </p> 
        que criamos antes*/
        tarefa.innerText = '-' + Input.value;//antes do texto será colocado um traço
        //será limpado para que possa add a proxima tarefa
        Input.value = '';
        //criando outro ouvinte para marcar a tarefa quando comcluida
        tarefa.addEventListener('click', function(){
            if (marcado == false){
            tarefa.style.textDecoration = 'line-through';
            marcado = true;
            }
            else{
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        })
        //para remover tarefa com 2 clicks
        tarefa.addEventListener('dblclick', function(){
            Tarefas.removeChild(tarefa);

        })
    }
})
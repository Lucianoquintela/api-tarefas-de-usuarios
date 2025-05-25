const URL = 'https://jsonplaceholder.typicode.com/todos';
 
async function chamarApi(){
  const resp = await fetch(URL);
  const containerTarefas = document.getElementById('container')
  if (resp.status === 200) {
    const obj = await resp.json();
    
     for (let e = 0; e < obj.length; e++) {
    console.log(obj[e]);

    
    const cardTarefas = document.createElement("div");
    
      cardTarefas.classList.add("cardEstilo");
      
      cardTarefas.innerHTML = `
      
    <div class="tarefa ${obj[e].completed ? 'bordaTarefaVerde' : 'bordaTarefaRed'}
    ">
    
      <p><strong>ID do Usuário:</strong> ${obj[e].userId}</p>
      <p><strong>ID da Tarefa:</strong> ${obj[e].id}</p>
      <p><strong>Título:</strong> 
        ${obj[e].title}
      </p>
      <p class="${obj[e].completed ? 'corVerde' : 'corRed'}"><strong>Concluída:</strong> 
        ${obj[e].completed}
      </p>
    </div>
        
        
        
      `;
      
    
      containerTarefas.appendChild(cardTarefas)
    
  }
  
  }
}
chamarApi();





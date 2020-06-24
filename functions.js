
  const listElement = document.querySelector('#list');
  const inputElement = document.querySelector('#tarefa');
  const buttonElement = document.querySelector('#botao');

  var todos = JSON.parse(localStorage.getItem('list_todos')) || ['Fique a vontade para escrever seus todos'];

  function renderizar(){
    listElement.innerHTML = '';

    for (todo of todos){
      var itemTodo = document.createElement('li');
      var todoContent = document.createTextNode(todo);
      var linkElement = document.createElement('a');
      var buttonDeleteText = document.createTextNode('Deletar');
      linkElement.setAttribute('href', '#');
      var pos = todos.indexOf(todo);
      linkElement.setAttribute ('onclick', 'deleteTodo('+ pos +')');
      linkElement.appendChild(buttonDeleteText);
      itemTodo.appendChild(todoContent);
      itemTodo.appendChild(linkElement);
      listElement.appendChild(itemTodo);
    }
  }

  renderizar();
  
  function addTodo (){
    var todoTxt = inputElement.value;
    todos.push(todoTxt);
    inputElement.value = '';
    renderizar();
    saveToDo();
  }
  buttonElement.onclick = addTodo;
  function deleteTodo (pos){
    todos.splice(pos, 1);
    renderizar();
    saveToDo();

  }

  function saveToDo (){
    localStorage.setItem('list_todos', JSON.stringify(todos));
  }
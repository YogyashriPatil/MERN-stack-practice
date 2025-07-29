const addBtn=document.getElementById('add-btn');
const todoInput=document.getElementById('todo-input');
const todoitem=document.getElementById('todo-cont')

addBtn.addEventListener('click', () => {
    const value=todoInput.value;

    const li=document.createElement('li')
    li.innerHTML=value;

    const delbtn=document.createElement('button')
    delbtn.innerHTML='X'

    delbtn.addEventListener('click', () => {
        li.remove()
    })
    li.appendChild(delbtn)
    todoitem.appendChild(li)
    // console.log(li);
    // console.log('User entered ',value);
    todoInput.value="";
})
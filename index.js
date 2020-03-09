let list=[];
let currId=null;
const nam = document.getElementById("name");
const ema = document.getElementById("email");
const cuAction = document.getElementById("cu-action");
const todoBody = document.getElementById("todo-body");
let id=0;
cuAction.addEventListener('click',addTodo);
function addTodo()
{
        if(currId)
        {
            list=list.map(todo =>
                {
                    if(currId ===  todo.id)
                    {
                        todo.name =nam.value;
                        todo.email =ema.value;
                    }
                    return todo;
                });
                updateValues(null,'Add');
        }
        else{
            list.push({
                id:++id,
                name:nam.value,
                email:ema.value
            });
        }
        buildTbody();
}        
    function reset()
    {
        nam.value ='';
        ema.value='';
    }
function buildTbody(){
    let tBody='';
    list.forEach(todo =>
        {
            const tr = `<tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>${todo.email}</td>
            <td>
            <a href="javascript:void(0)" onclick="editTodo(${todo.id})">Edit</a>
            <a href="javascript:void(0)" onclick="deleteTodo(${todo.id})">Delete</a>
            </td>
            </tr>`
        tBody += tr;
        });
        todoBody.innerHTML=tBody;
        reset();
        
}
function updateValues(id,text)
{
    currId = id;
    cuAction.innerHTML = text;
}
function editTodo(id)
{
    const todo = list.find(t=>t.id === id);
        nam.value =todo.name;
        ema.value=todo.email;
        updateValues(id,"Update");
        // buildTbody();
}
  
function deleteTodo(id)
{
    list =list.filter(todo => todo.id != id);
    buildTbody();
}
 const createItem=(todo,id)=>{
     let item =`
     <li
       key="${id}"
       class=${todo.checked ? 'taskItem-done' : 'taskItem'}>
       ${todo.title} ${todo.date?todo.dat:' '} 
       <img class ="btn" src="./done.png" onclick = "completeTodo(event)"/>
       <img class ="btn" src="./baseline_delete_black_18dp.png" onclick = "deleteTodo(event)"/>
       </li>
     `
 return item
}
const renderTodoItems = () => {
    list.innerHTML = ''
    let items = []


todosArray.length?
   todosArray.map((todo, id) => {
        list.prepend(createItem(todo,id))
        items.push(createItem(todo,id))
        list.innerHTML = items.join('')
    }):
    list.prepend('You have not misssiya')
}
renderTodoItems()
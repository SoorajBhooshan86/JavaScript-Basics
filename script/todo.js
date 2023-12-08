const todoList = [];

function addTODO() {

    let inputTODO = document.querySelector('.js-input-todo');
    let inputDate = document.querySelector('.js-todo-date');
    todoList.push({ todo: inputTODO.value, date: inputDate.value });
    display();

}


function display() {
    let resultUI = ``;
    for (let i = 0; i < todoList.length; i++) {
        resultUI +=
            `
        <div>${todoList[i].todo}</div>
        <div>${todoList[i].date}</div>
         <button  class="delete-button" onclick="todoList.splice(${i},1);   display();" >Delete</button>
        `
    }

    document.querySelector('.js-result').innerHTML = resultUI;
}




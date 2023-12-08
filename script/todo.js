const todoList = [];

function addTODO() {

    let inputElement = document.querySelector('.js-input-todo');
    todoList.push(inputElement.value);
    console.log(todoList);
    display();

}

function display() {
    let resultUI = ``;
    for (let i = 0; i < todoList.length; i++) {
        resultUI += `<p>${todoList[i]} </p>`
    }
    console.log('-----------------');
    console.log(resultUI);

    document.querySelector('.js-result').innerHTML = resultUI;
}


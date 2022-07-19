const formAdd = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//add new todo
const addTodos = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
    list.innerHTML+=html;

};

//submit new todo

formAdd.addEventListener('submit', e => {
    e.preventDefault();
    const todo = formAdd.add.value.trim();
    if(todo.length){
        addTodos(todo);
        formAdd.reset();
    }
});

//Delete Todo

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

//Search Todos

const searchTodos = (term) => {
    Array.from(list.children)
    .filter( (todo) => !todo.textContent.includes(term))
    .forEach( (todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter( todo => todo.textContent.includes(term))
    .forEach( todo => todo.classList.remove('filtered'));

};
search.addEventListener('keyup', e => {
    const term = search.value.trim();
    searchTodos(term);
});
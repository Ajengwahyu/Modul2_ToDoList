var app = new Vue({
    el: "#app",
    data() {
        return {
            todos: [], //menampung semua isian user 
            todo: ""    //menampung tiap isian
        }
    },
    created() {
        this.loadLocalStorage();
    },
    watch: {
        todos() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },
    methods: {
        loadLocalStorage() {
            const ls = JSON.parse(localStorage.getItem("todos"));
            console.log(ls);
            if(ls == null) { return; }
            this.todos = ls;
            console.log(this.todos);
        },
        addTodo() {
            this.todos.push(this.todo); //menam bah item le array
            this.todo = ""; //menghapus item array tertentu
        },
        deleteTodo(index){
            this.todos.splice(index, 1);
        }
    }
})
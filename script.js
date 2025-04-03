let todo = [];
let todoList = document.getElementById("todo-list");

function Agregar() {
    let nuevo = document.getElementById("nuevo").value.trim();  
    if (nuevo !== "") {  
        todo.push({ texto: nuevo, completado: false });  
        document.getElementById("nuevo").value = "";  
        Mostrar();  
    }
}

function Mostrar() {
    todoList.innerHTML = "";  

    todo.forEach((tarea, index) => {
        let li = document.createElement("li");

        if (tarea.completado) {
            li.classList.add("completed");
        }

        li.textContent = tarea.texto;  

        li.addEventListener("click", function() {
            tarea.completado = !tarea.completado;  
            Mostrar();  
        });

        todoList.appendChild(li);
    });
}

function Eliminar(){
    todoList.innerHTML ="";
    todo = [];
}
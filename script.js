let todo = [];
let todoList = document.getElementById("todo-list");

function Agregar() {
    let nuevo = document.getElementById("nuevo").value.trim();  
    let fecha = Date()
    if (nuevo !== "") {  
        todo.push({ 
            texto: nuevo, 
            fechaCreacion: fecha, 
            completado: false, 
            fechaCompletado: null 
        });  
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

        li.textContent = `${tarea.texto} - Creada: ${new Date(tarea.fechaCreacion).toLocaleString("ar-AR", { timeZone: "UTC" })}`;

        if (tarea.completado) {
            li.textContent += ` - Completada: ${new Date(tarea.fechaCompletado).toLocaleString("ar-AR", { timeZone: "UTC" })}`;
        }

        li.addEventListener("click", function() {
            if (!tarea.completado) {
                tarea.fechaCompletado = Date();
            }
            tarea.completado = !tarea.completado;  
            Mostrar();  
        });

        todoList.appendChild(li);
    });
}

function Eliminar() {
    todoList.innerHTML = "";
    todo = [];
}

function MostrarMasRapida() {
    let tareaMasRapida = null;
    let tiempoMinimo = Infinity;

    todo.forEach(tarea => {
        if (tarea.completado && tarea.fechaCompletado) {
            let tiempoTarea = new Date(tarea.fechaCompletado) - new Date(tarea.fechaCreacion);
            if (tiempoTarea < tiempoMinimo) {
                tiempoMinimo = tiempoTarea;
                tareaMasRapida = tarea;
            }
        }
    });

    if (tareaMasRapida) {
        alert(`La tarea más rápida fue: "${tareaMasRapida.texto}" con un tiempo de ${Math.round(tiempoMinimo / 1000)} segundos.`);
    } else {
        alert("No hay tareas completadas aún.");
    }
}

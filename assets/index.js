// Lista de tareas como objetos
let listaDeTareas = [];
let seguir = true; //el seguir es para entrar al loop

while (seguir) {

    let opcion = prompt(`
GESTOR DE TAREAS
-------------------------
1. Agregar tarea
2. Marcar tarea como completada
3. Mostrar lista de tareas y
4. Salir

Elige una opción:
`);

    switch (opcion) {
        case "1":
            let nuevaTarea = prompt("Ingresa la nueva tarea:");
            if (nuevaTarea && nuevaTarea.trim() !== "") { // el trim es para evitar que el usuario llene con espacios vacios
                listaDeTareas.push({
                    texto: nuevaTarea,  //asigno dos propiedades al elemento: texto y completada. Así cuando esté completada cambia a true
                    completada: false
                });
                alert("Tarea agregada.");
            }
            break;

        case "2":
            if (listaDeTareas.length === 0) {   // si el length es cero, es que no se han agregado tareas aún
                alert("No hay tareas para marcar.");
                break;
            }

            let listaParaCompletar = `Selecciona el número de la tarea:\n`; // si hay tareas entonces se muestra la lista de tareas para elegir una para marcar
                                                                            // el \n es para salto de linea
            for (let i = 0; i < listaDeTareas.length; i++) {
                listaParaCompletar += `${i + 1}. ${listaDeTareas[i].texto}\n`; //el i+1 es para que la lista comience por 1 y no por cero
            }                                                                  

            let index = parseInt(prompt(listaParaCompletar)) - 1; // el -1 es para que obtengamos el indice, no el numero en la lista.
                    // el parseInt funciona como el Number, pero por ejemplo si el usurio ingresa por error "2a" el parseInt rescata el numero 2. El number lanzaria error
            if (!isNaN(index) && listaDeTareas[index]) { //el !isNaN valida si es un numero
                listaDeTareas[index].completada = true;  // si esta todo ok, la propiedad "completada" cambia su valor a true
                alert("Tarea marcada como completada.");
            } else {
                alert("Opción inválida.");
            }

            break;

        case "3":
            const mensaje = listaDeTareas
              .map((t, i) => {
              if (t.completada) {
                  return `${i + 1}. ✔️ [COMPLETADA] ${t.texto}`;
              } else {
                   return `${i + 1}. ⭕ [PENDIENTE] ${t.texto}`;
               }
            })
             .join("\n");

           alert(mensaje);

           console.clear();
           console.log("--- LISTA DE TAREAS ---");
           for (let i = 0; i < listaDeTareas.length; i++) {
               let tarea = listaDeTareas[i];
               if (tarea.completada) {
                 console.log(`%c${i + 1}. ${tarea.texto}`, "text-decoration: line-through; color: gray;");
             } else {
               console.log(`${i + 1}. ${tarea.texto}`);
             }
          }
          break;

        case "4":
            seguir = false;
            alert("Saliendo del gestor...");
            break;

        default:
            alert("Opción inválida. Inténtalo nuevamente.");
    }
}



export class Todo {

    static fromJson( { id, tarea, completado, creado } ) {

        const tempTodo      = new Todo( tarea ); // Todo temporal

        // Generamos sus propiedades.
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;

        // Genera un número aleatorio
        this.id         = new Date().getTime(); 
        this.completado = false;
        this.creado     = new Date();

    }
}
import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] agregar todo';
export const TOGGLE_ALLTODO = '[TODO] borrar all todo';
export const TOGGLE_TODO = '[TODO] cambiar todo';
export const EDITAR_TODO = '[TODO] editar todo';
export const BORRAR_TODO = '[TODO] borrar todo';
export const BORRAR_COMPLETADOS = '[TODO] borrar completados';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) { }
}
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}
export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALLTODO;
    constructor(public compleado: boolean) { }
}
export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) { }
}
export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: number) { }
}
export class BorrarCompletadosAction implements Action {
    readonly type = BORRAR_COMPLETADOS;
    // constructor(public id: number) { }
}

export type Acciones = AgregarTodoAction | 
                        ToggleTodoAction | 
                        EditarTodoAction | 
                        BorrarTodoAction |
                        ToggleAllTodoAction |
                        BorrarCompletadosAction;
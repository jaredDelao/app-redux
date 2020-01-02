import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos')
const todo2 = new Todo('Salvar el mundo')

const estadoInicial: Todo[] = [todo1, todo2];

todo1.completado = true;

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {

    switch (action.type) {

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map(res => {
                if (res.id === action.id) {
                    return {
                        ...res,
                        completado: !res.completado
                    };
                } else {
                    return res;
                }
            });

        case fromTodo.EDITAR_TODO:
            return state.map(res => {
                if (res.id === action.id) {
                    return {
                        ...res,
                        texto: action.texto
                    };
                } else {
                    return res;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id);

        case fromTodo.TOGGLE_ALLTODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.compleado
                }
            })

        default:
            return state;
    }

}
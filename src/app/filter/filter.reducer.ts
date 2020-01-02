import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtroValidos = 'todos';

export function filterReducer(state = estadoInicial, action: fromFiltro.acciones): fromFiltro.filtroValidos {

    switch(action.type) {

        case fromFiltro.SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }

}
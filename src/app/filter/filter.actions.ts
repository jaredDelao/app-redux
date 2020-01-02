import { Action } from '@ngrx/store';


export const SET_FILTRO = '[filter] Set Filtro';

export type filtroValidos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;

    constructor(public filtro: filtroValidos) {}
}

export type acciones = SetFiltroAction;
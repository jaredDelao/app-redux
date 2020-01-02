import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

import * as fromFiltro from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtroValidos): any {
    return null;
  }

}

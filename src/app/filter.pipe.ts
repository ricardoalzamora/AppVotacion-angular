import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(votanteList: any, search: any): any {
    if(search === undefined){
      return votanteList;
    }
    return votanteList.filter(function(votante){
      return votante.document.toLowerCase().includes(search.toLowerCase());
    })
  }

}

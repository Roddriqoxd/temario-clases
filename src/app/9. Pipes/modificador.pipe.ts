import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modificador'
})
export class ModificadorPipe implements PipeTransform {

  transform(value: string, prefijo: string): string {
    return prefijo+ ' ' +value ;
  }

}

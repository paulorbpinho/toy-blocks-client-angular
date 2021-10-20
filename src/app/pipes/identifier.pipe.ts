import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identifier'
})
export class IdentifierPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return ('00' + value).substring(-2);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delta'
})
export class DeltaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

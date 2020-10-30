import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watt'
})
export class WattPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(1) + " W";
  }

}

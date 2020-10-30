import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZekeringService {

  maximumVerbruik: number = 10;
  huidigVerbruik: number = 0;
  
  constructor() { }
}

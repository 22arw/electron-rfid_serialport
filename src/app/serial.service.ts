import { Injectable } from '@angular/core';
import * as SerialPort from 'serialport';

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  serialPort: typeof SerialPort = window['require']('serialport');

  constructor() { }
}

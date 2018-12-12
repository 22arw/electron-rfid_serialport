import { Injectable } from '@angular/core';
import * as SerialPort from 'serialport';

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  serialPort: typeof SerialPort;

  constructor() {
    if (this.serialPort()) {
      // this.serialPort = window.require('serialport');
    }
  }
}

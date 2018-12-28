import { Component, OnInit } from '@angular/core';
import * as Serialport from 'serialport';
import { SerialService } from '../serial.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {

  comPorts = [];
  selectedPort = '';

  constructor(private serial: SerialService) {
    let isElectron: boolean = window && window['process'] && window['process'].type;

    if (isElectron) {
      let serialport: typeof Serialport = window['require']('serialport');
      let app: Electron.App = window['require']('electron').remote;
      console.log(serialport, app, window['process']);
    }
  }


  ngOnInit() {
    this.listPorts();
    console.log(this.comPorts);
  }

  listPorts() {
    this.comPorts = [];
    this.serial.serialPort.list((err, ports) => {
      ports.forEach(port => { this.comPorts.push(port); });
    });
  }

}

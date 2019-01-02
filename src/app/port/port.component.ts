import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as Serialport from 'serialport';
import { SerialService } from '../serial.service';
import { PortService } from '../core/port.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {

  comPorts = [];
  selectedPort;

  constructor(private serial: SerialService, private port: PortService) {
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

  portSelection(port) {
    console.log('Setting port to: ', port);
    this.port.setPort(port);
  }

}

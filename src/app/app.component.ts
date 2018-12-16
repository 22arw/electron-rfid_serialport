import { Component, OnInit } from '@angular/core';
import { } from 'electron';
import * as Serialport from 'serialport';
import { SerialService } from './serial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'electron-angular-serialport';
  comPorts = [];

  constructor(private serial: SerialService) {
    let isElectron: boolean = window && window['process'] && window['process'].type;

    if (isElectron) {
      let serialport: typeof Serialport = window['require']('serialport');
      let app: Electron.App = window['require']('electron').remote;
      console.log(serialport, app, window['process']);
    }
  }

  ngOnInit() {
    this.getPorts();
    console.log(this.comPorts);
  }

  getPorts() {
    this.serial.serialPort.list((err, ports) => {
      ports.forEach(port => { this.comPorts.push(port); });
    });
  }
}

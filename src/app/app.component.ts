import { Component, OnInit } from '@angular/core';
import { } from 'electron';
import * as Serialport from 'serialport';
import { SerialService } from './serial.service';
import { PortService, Port } from './core/port.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'electron-angular-serialport';
  collapsed = false;
  connectedPort;

  constructor(private serial: SerialService, private port: PortService) {
    let isElectron: boolean = window && window['process'] && window['process'].type;

    if (isElectron) {
      let serialport: typeof Serialport = window['require']('serialport');
      let app: Electron.App = window['require']('electron').remote;
      console.log(serialport, app, window['process']);
    }
  }

  ngOnInit() {
    this.getPort();
  }

  getPort() {
    console.log('Getting Port');
    this.port.getPort().subscribe( data => this.connectedPort = data);
  }

  // connectPort() {
  //   const port = new this.serial.serialPort('/dev/cu.usbmodem14301', { baudRate: 115200 });
  //   const parser = new this.serial.serialPort.parsers.Readline({ delimiter: '\r\n'});
  //   port.pipe(parser);
  //   parser.on('data', function(data) {
  //     console.log(data);
  //   });
  // }
}

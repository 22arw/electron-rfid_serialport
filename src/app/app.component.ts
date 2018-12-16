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

  constructor(private serialService: SerialService) {
    let isElectron: boolean = window && window['process'] && window['process'].type;

    if (isElectron) {
      let serialport: typeof Serialport = window['require']('serialport');
      let app: Electron.App = window['require']('electron').remote;
      console.log(serialport, app, window['process']);
    }
  }

  ngOnInit() {
    /**
     * Here was the problem.
     * Do not directly use the import.
     */
    // console.log(Serialport.list());

    console.log(this.serialService.serialPort.list());
  }
}

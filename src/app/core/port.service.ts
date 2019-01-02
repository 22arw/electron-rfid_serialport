import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Port {
  portName: String;
}

@Injectable({
  providedIn: 'root'
})
export class PortService {

  activePort;

  constructor() { }

  setPort(port) {
    console.log('The port: ', port);
    this.activePort = port;
  }

  getPort(): Observable<Port> {
    console.log('The port for the application runtime: ', this.activePort);
    return this.activePort;
  }
}

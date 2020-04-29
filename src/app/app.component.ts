import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'; 
import { data } from "./data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  openedWindow;
  datas: any[] = data;
  latitude: number = 12.3826401;
  longitude: number = 64.8820801;
  zoom: number = 0;    
 
  constructor() { }
  ngOnInit() { }
  openWindow(data) {
    this.latitude = data.address.latitude;
    this.longitude = data.address.longitude;
    this.zoom = 5;
    setTimeout(() => {
      this.openedWindow = data.id;
    }, 100);
  }
  closeWindow(id) {
    this.openedWindow = null;
  }
  isInfoWindowOpen(id) {
    return this.openedWindow == id;
  }

}

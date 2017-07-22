import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BLE} from '@ionic-native/ble';
/**
 * Generated class for the DevicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
public device:any;
public connecting:boolean;

public characteristics=[];
public ble:BLE;
 constructor(public navParams: NavParams,public nav: NavController) {
this.device = this.navParams.get('device');
this.connecting = true;
this.connect(this.device.id);

 }
 connect(deviceID) {
this.characteristics = [];
this.ble.connect(deviceID).subscribe(peripheralData => {
console.log(peripheralData.characteristics);
this.characteristics = peripheralData.characteristics;
this.connecting = false;
},

 peripheralData => {
console.log('disconnected');
});
}

connectToCharacteristic(deviceID,characteristic) {
console.log('Connect To Characteristic');
console.log(deviceID);
console.log(characteristic);
}

}

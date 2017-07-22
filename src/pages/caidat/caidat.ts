import { Component} from '@angular/core';
import {  IonicPage, NavController ,Platform} from 'ionic-angular';

//import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { BLE } from '@ionic-native/ble';
import {DevicePage} from '../device/device';




/**
 * Generated class for the CaidatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-caidat',
    templateUrl: 'caidat.html',
})
export class CaidatPage {
    
 
private devices:any;

  private isScanning:any;
   static get parameters() {

    return [[NavController]];

  }

constructor(public navCtrl: NavController, private ble:BLE,platform: Platform) 
{
    this.navCtrl = navCtrl;
    this.devices = [];
    this.isScanning = false;
   
}


startScanning() {
   console.log('Scanning Started');

    this.devices = [];

    this.isScanning = true;
    this.ble.scan([],5).subscribe(device => {

    this.devices.push(device);

    });


    setTimeout(() => {

    this.ble.stopScan().then(() => {

      console.log('Scanning has stopped');

      console.log(JSON.stringify(this.devices))

      this.isScanning = false;

    });

    }, 5000);

}

 connectToDevice(device) {

    console.log('Connect To Device');

    console.log(JSON.stringify(device))

    this.navCtrl.push(DevicePage, {

    device: device

  });

}
}
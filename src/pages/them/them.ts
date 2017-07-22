import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {TodosPage} from '../todos/todos';

/**
 * Generated class for the ThemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-them',
  templateUrl: 'them.html',
})
export class ThemPage {
   public todoList: Array<string>;
   public todoListSDT: Array<string>;
    public todoItem: string;
    public todoSDT: string;
    

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
  this.todoListSDT = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
        if(!this.todoListSDT) {
            this.todoListSDT = [];
        }
        this.todoItem = "";
     this.todoSDT="";
  }
 
save() {
        if(this.todoItem != "" && this.todoSDT != "" ) {
        this.todoListSDT.push(this.todoSDT);
            this.todoList.push(this.todoItem);
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            localStorage.setItem("todos", JSON.stringify(this.todoListSDT));
              
            this.navCtrl.push(TodosPage);
            let alert = this.alertCtrl.create({
      title: 'Thành Công!',
      subTitle: 'Bạn đã thêm thành viên thành công',
      buttons: ['OK']
    });
    alert.present();
        }
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThemPage} from '../them/them';

/**
 * Generated class for the TodosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {
public todoList: Array<string>;
public todoListSDT: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
    
        if(!this.todoList) {
            this.todoList = [];
            
        } 
  }
  
onPageDidEnter() {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
            
        } 
    }
 
    delete(index: number) {
        this.todoList.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    }
 
    add() {
        this.navCtrl.push(ThemPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosPage');
  }

}

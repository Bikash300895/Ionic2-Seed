import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ComponentActionSheetsPage} from '../../pages/component-action-sheets/component-action-sheets'

/*
  Generated class for the Components page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-components',
  templateUrl: 'components.html'
})
export class ComponentsPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Action Sheets', component: ComponentActionSheetsPage}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentsPage');
  }

  openPage(item) {
    this.navCtrl.push(item.component);
  }

}

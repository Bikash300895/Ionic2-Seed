import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ComponentActionSheetsPage} from '../../pages/component-action-sheets/component-action-sheets';
import{ComponentAlertPage} from '../../pages/component-alert/component-alert';
import {BasicComponentsPage} from '../../pages/basic-components/basic-components';
import {ComponentCardPage} from '../../pages/component-card/component-card';
import {ComponentBackgroundCardPage} from '../../pages/component-background-card/component-background-card';


@Component({
  selector: 'page-components',
  templateUrl: 'components.html'
})
export class ComponentsPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Basic Components', component: BasicComponentsPage},
      { title: 'Cards', component: ComponentCardPage},
      { title: 'Backgournd Cards', component: ComponentBackgroundCardPage},
      { title: 'Action Sheets', component: ComponentActionSheetsPage},
      { title: 'Alert', component: ComponentAlertPage}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentsPage');
  }

  openPage(item) {
    this.navCtrl.push(item.component);
  }

}

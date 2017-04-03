import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ComponentBackgroundCardPage} from "../background-card/component-background-card";
import {ComponentCardPage} from "../card/component-card";
import {ModelPage} from "../modal/model";

/*
  Generated class for the Tab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = ComponentBackgroundCardPage;
    this.tab2 = ComponentCardPage;
    this.tab3 = ModelPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}

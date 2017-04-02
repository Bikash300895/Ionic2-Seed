import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController  } from 'ionic-angular';
import {PopOverContent} from "./PopOverContent";

/*
  Generated class for the Popover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController ,
              public navParams: NavParams) {}

  presentPopover(ev){
    let popover = this.popoverCtrl.create(PopOverContent);
    popover.present();
  }

}

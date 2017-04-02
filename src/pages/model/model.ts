import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {ModalContent} from "./ModalContent";

/*
  Generated class for the Model page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-model',
  templateUrl: 'model.html'
})
export class ModelPage {

  constructor(public navCtrl: NavController,
              public modelCtrl: ModalController,
              public navParams: NavParams) {}

  openModal(charNum){
    let modal = this.modelCtrl.create(ModalContent, charNum);
    modal.present();
  }

}

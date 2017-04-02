import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/*
  Generated class for the AvaterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avater-page',
  templateUrl: 'avater-page.html'
})
export class AvaterPagePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public lodingCtrl: LoadingController
          ) {}

  presentLoading(){
    let loader = this.lodingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaterPagePage');
  }

}

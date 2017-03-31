import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the ComponentAlert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-component-alert',
  templateUrl: 'component-alert.html'
})
export class ComponentAlertPage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentAlertPage');
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'New Firend!',
      subTitle: 'You have a new friend named Shuvendu Bikash',
      buttons:['OK','Done']
    });
    alert.present();
  }

}

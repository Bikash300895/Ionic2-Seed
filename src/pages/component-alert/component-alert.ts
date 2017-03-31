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

  data:any;

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

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.data=data;
      }
    });
    alert.present();
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.data=data;
        console.log(data);
      }
    });
    alert.present();
  }
}

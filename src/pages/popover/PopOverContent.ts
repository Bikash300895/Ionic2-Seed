import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
 Generated class for the Popover page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'content-popover',
    templateUrl: 'popover-content.html'
})
export class PopOverContent {

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad PopoverPage');
    }

}

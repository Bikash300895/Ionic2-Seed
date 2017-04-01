import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoveComponent} from '../../component/love/love.component';


@Component({
  selector: 'page-blog',
  templateUrl: 'blog-page.html',
  providers: [LoveComponent]
})
export class BlogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPagePage');
  }

}

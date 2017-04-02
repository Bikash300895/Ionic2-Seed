import {Component, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;


  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController ,
              public navParams: NavParams) {}

  presentPopover(ev){
    let popover = this.popoverCtrl.create(PopOverContent,{
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });
    popover.present({
      ev: ev
    });
  }

}

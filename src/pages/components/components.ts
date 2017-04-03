import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ComponentActionSheetsPage} from '../action-sheets/component-action-sheets';
import{ComponentAlertPage} from '../alert/component-alert';
import {BasicComponentsPage} from '../../pages/basic-components/basic-components';
import {ComponentCardPage} from '../card/component-card';
import {ComponentBackgroundCardPage} from '../background-card/component-background-card';
import {BlogPage} from "../blog-page/blog-page";
import {FabPage} from '../../pages/fab/fab';
import {InputPage} from "../input/input";
import {ListPage} from "../../pages/list/list";
import {AvaterPagePage} from "../avater-page/avater-page";
import {ModelPage} from "../modal/model";
import {PopoverPage} from "../popover/popover";
import {RangePage} from "../range/range";
import {SearchPage} from "../search/search";



@Component({
  selector: 'page-components',
  templateUrl: 'components.html'
})
export class ComponentsPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Basic Components', component: BasicComponentsPage},
      { title: 'Blog posts', component: BlogPage},
      { title: 'Cards', component: ComponentCardPage},
      { title: 'Backgournd Cards', component: ComponentBackgroundCardPage},
      { title: 'Action Sheets', component: ComponentActionSheetsPage},
      { title: 'Alert', component: ComponentAlertPage},
      { title: 'Fab', component: FabPage},
      { title: 'Taking input', component: InputPage},
      { title: 'A List page', component: ListPage},
      { title: 'Avater page', component: AvaterPagePage},
      { title: 'Modal', component: ModelPage},
      { title: 'PopOver', component: PopoverPage},
      { title: 'Range', component: RangePage},
      { title: 'Search in Page', component: SearchPage},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentsPage');
  }

  openPage(item) {
    this.navCtrl.push(item.component);
  }

}

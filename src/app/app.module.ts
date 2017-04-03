import { NgModule, ErrorHandler } from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ComponentsPage} from "../pages/components/components";
import {ComponentActionSheetsPage} from "../pages/action-sheets/component-action-sheets";
import{ComponentAlertPage} from '../pages/alert/component-alert';
import {BasicComponentsPage} from '../pages/basic-components/basic-components';
import {ComponentCardPage} from '../pages/card/component-card';
import {ComponentBackgroundCardPage} from '../pages/background-card/component-background-card';
import {LoveComponent} from '../component/love/love.component';
import {BlogPage} from '../pages/blog-page/blog-page';
import {FabPage} from '../pages/fab/fab';
import {InputPage} from '../pages/input/input';
import {ListPage} from "../pages/list/list";
import {AvaterPagePage} from "../pages/avater-page/avater-page";
import {ModelPage} from "../pages/modal/model";
import {ModalContent} from "../pages/modal/ModalContent";
import {PopoverPage} from "../pages/popover/popover";
import {PopOverContent} from "../pages/popover/PopOverContent";
import {RangePage} from "../pages/range/range";
import {SearchPage} from "../pages/search/search";


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage, ComponentsPage,ComponentActionSheetsPage,ComponentAlertPage,BasicComponentsPage,FabPage,InputPage,
    ComponentCardPage,ComponentBackgroundCardPage,LoveComponent,BlogPage,ListPage, AvaterPagePage, ModelPage, ModalContent,
      PopoverPage,PopOverContent, RangePage, SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage, ComponentsPage,ComponentActionSheetsPage,ComponentAlertPage,BasicComponentsPage,FabPage,InputPage,
    ComponentCardPage,ComponentBackgroundCardPage,LoveComponent,BlogPage,ListPage, AvaterPagePage, ModelPage, ModalContent,
    PopoverPage,PopOverContent, RangePage, SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

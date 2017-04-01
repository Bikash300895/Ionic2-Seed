import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ComponentsPage} from "../pages/components/components";
import {ComponentActionSheetsPage} from "../pages/component-action-sheets/component-action-sheets";
import{ComponentAlertPage} from '../pages/component-alert/component-alert';
import {BasicComponentsPage} from '../pages/basic-components/basic-components';
import {ComponentCardPage} from '../pages/component-card/component-card';
import {ComponentBackgroundCardPage} from '../pages/component-background-card/component-background-card';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage, ComponentsPage,ComponentActionSheetsPage,ComponentAlertPage,BasicComponentsPage,
    ComponentCardPage,ComponentBackgroundCardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage, ComponentsPage,ComponentActionSheetsPage,ComponentAlertPage,BasicComponentsPage,
    ComponentCardPage,ComponentBackgroundCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

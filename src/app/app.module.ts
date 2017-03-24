import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {PickASongPage} from '../pages/pick-a-song-page/pick-a-song-page'
import {StartSingingPage} from '../pages/start-singing/start-singing'
import {ResultsPage} from '../pages/results/results'



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PickASongPage,
    StartSingingPage,
    ResultsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PickASongPage,
    StartSingingPage,
    ResultsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler,}]
})
export class AppModule {}

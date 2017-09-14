import { AuthService } from '../providers/auth-service';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login' ;
import { HomePage } from '../pages/home/home';
import { MailsPage } from '../pages/mails/mails';
import { NotesPage } from '../pages/notes/notes';
import { AbooksPage } from '../pages/abooks/abooks';
import { CalendarsPage } from '../pages/calendars/calendars';
import { StoragePage } from '../pages/storage/storage';
import { TasksPage } from '../pages/tasks/tasks';
import { HttpProvider } from '../providers/http/http';
import { MailsService } from '../providers/mails-service/mails-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MailsPage,
    NotesPage,
    AbooksPage,
    CalendarsPage,
    StoragePage,
    TasksPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MailsPage,
    NotesPage,
    AbooksPage,
    CalendarsPage,
    StoragePage,
    TasksPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    HttpProvider,
    MailsService,
  ]
})
export class AppModule {}
import { AuthService } from '../providers/auth-service';
import { CacheModule } from 'ionic-cache';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

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
import { AbooksService } from '../providers/abooks-service/abooks-service';
import { NotesService } from '../providers/notes-service/notes-service';
import { TasksService } from '../providers/tasks-service/tasks-service';
import { StorageService } from '../providers/storage-service/storage-service';
import { CalendarsService } from '../providers/calendars-service/calendars-service';
import { GlobalService } from '../providers/global-service/global-service';

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
    CacheModule.forRoot(),
    IonicStorageModule.forRoot(),
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
    AbooksService,
    NotesService,
    TasksService,
    StorageService,
    CalendarsService,
    GlobalService,
  ]
})
export class AppModule {}
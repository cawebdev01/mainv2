import { AuthService } from '../providers/auth-service';
import { CacheModule } from 'ionic-cache';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, /*Alert, AlertController,*/ Loading } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { IonicStorageModule } from '@ionic/storage';
import { NgCalendarModule } from 'ionic2-calendar';

import { XamApp } from './app.component';
import { LoginPage } from '../pages/login/login' ;
import { HomePage } from '../pages/home/home';
import { MailsPage } from '../pages/mails/mails';
import { MailPage } from '../pages/mail/mail';
import { NotedetailPage } from '../pages/notedetail/notedetail';
import { NotesPage } from '../pages/notes/notes';
import { NotesListPage } from '../pages/noteslist/noteslist'
import { AbookPage } from '../pages/abook/abook';
import { AbooksPage } from '../pages/abooks/abooks';
import { ContactPage } from '../pages/contact/contact';
import { CalendarsPage } from '../pages/calendars/calendars';
import { CalendarPage } from '../pages/calendar/calendar';
import { StoragePage } from '../pages/storage/storage';
import { TaskPage } from '../pages/task/task';
import { DocPage } from '../pages/doc/doc';
import { TasksListPage } from '../pages/taskslist/taskslist';
import { TasksPage } from '../pages/tasks/tasks';
import { MailsService } from '../providers/mails-service';
import { AbooksService } from '../providers/abooks-service';
import { NotesService } from '../providers/notes-service';
import { TasksService } from '../providers/tasks-service';
import { StorageService } from '../providers/storage-service';
import { CalendarsService } from '../providers/calendars-service';
import { HomeService } from '../providers/home-service';

@NgModule({
  declarations: [
    XamApp,
    LoginPage,
    HomePage,
    MailPage,
    MailsPage,
    NotedetailPage,
    NotesPage,
    NotesListPage,
    AbooksPage,
    AbookPage,
    ContactPage,
    CalendarPage,
    CalendarsPage,
    DocPage,
    StoragePage,
    TaskPage,
    TasksPage,
    TasksListPage,

  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    HttpModule,
    IonicModule.forRoot(XamApp),
    CacheModule.forRoot(),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    XamApp,
    LoginPage,
    HomePage,
    MailPage,
    MailsPage,
    NotesPage,
    NotedetailPage,
    NotesListPage,
    AbooksPage,
    AbookPage,
    ContactPage,
    CalendarPage,
    CalendarsPage,
    DocPage,
    StoragePage,
    TaskPage,
    TasksPage,
    TasksListPage,

  ],
  providers: [
    StatusBar,
    //Alert,
    SplashScreen,
    LocalNotifications,
    //Loading,
    //Alert,
    //AlertController,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    MailsService,
    AbooksService,
    NotesService,
    TasksService,
    StorageService,
    CalendarsService,
    HomeService,
  ]
})
export class AppModule {}
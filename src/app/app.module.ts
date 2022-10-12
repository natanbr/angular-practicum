import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { CommentComponent } from './comments-view/comment/comment.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WriterComponent } from './writer/writer.component';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interseptor.service';
import { LoaderComponent } from './loader/loader.component';
import { NotificationButtonsComponent } from './notification-buttons/notification-buttons.component';
import { SwitchsComponent } from './switchs/switchs.component';
import { CommentsSummeryComponent } from './comments-summary/comments-summary.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    CommentsViewComponent,
    CommentComponent,
    WriterComponent,
    LoaderComponent,
    NotificationButtonsComponent,
    SwitchsComponent,
    CommentsSummeryComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

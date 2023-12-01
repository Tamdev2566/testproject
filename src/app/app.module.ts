import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { UsersComponent } from './user-auth/users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAuthModule
  ],

  providers: [],
  bootstrap: [AppComponent,UsersComponent]
})
export class AppModule { }

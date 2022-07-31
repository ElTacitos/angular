import { ActionComponent } from './action/action.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, ActionComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, HttpClientModule],
  providers: [],
})
export class AppModule {}

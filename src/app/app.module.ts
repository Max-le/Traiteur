import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuHolderComponent } from './components/menu-holder/menu-holder.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuPizzaComponent } from './components/menu-holder/menu-pizza/menu-pizza.component';
import { MenuPateComponent } from './components/menu-holder/menu-pate/menu-pate.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuHolderComponent,
    ContactComponent,
    MenuPizzaComponent,
    MenuPateComponent,
    ContactInfoComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

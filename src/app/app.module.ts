import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GenderPipe } from './gender.pipe';
import {PersonService} from './person.service';
import { SearchComponent } from './search/search.component';
import {PeopleProjectRoutingModule} from './app-routing.module';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    SearchComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PeopleProjectRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

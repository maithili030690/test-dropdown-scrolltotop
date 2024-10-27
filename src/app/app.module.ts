import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { PostCardComponent } from './post-card/post-card.component';
import { ScrolltotopDirective } from './scrolltotop.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    PostCardComponent,
    ScrolltotopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

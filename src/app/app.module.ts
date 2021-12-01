import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import CharacterTile from './character-tile';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    CharacterTile,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
};

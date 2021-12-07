import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import CharacterTile from './character-tile';
import WordButton from './word-button';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    CharacterTile,
    WordButton,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
};

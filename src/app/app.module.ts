import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import CharacterTile from './character-tile';
import WordTile from './word-tile';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    CharacterTile,
    WordTile,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
};

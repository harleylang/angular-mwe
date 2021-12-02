import { Component } from '@angular/core';

const html = `
    <h1>Hello, {{name}}</h1>
    <character-tile [letter]="name[0]"></character-tile>
    <word-tile [word]="name"></word-tile>
`;

@Component({
    selector: 'app-main',
    template: html,
})
class AppComponent {
    name = 'world!';
};

export default AppComponent;

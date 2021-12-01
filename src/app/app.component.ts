import { Component } from '@angular/core';

const html = `
    <h1>Hello, {{name}}</h1>
    <character-tile letter='h'></character-tile>
`;

@Component({
    selector: 'app-main',
    template: html,
})
class AppComponent {
    name = 'world!';
};

export default AppComponent;

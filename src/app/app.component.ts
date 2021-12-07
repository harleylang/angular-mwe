import { Component } from '@angular/core';

const html = `
    <h1>Hello, {{name}}</h1>
    <section id='characters'>
        <character-tile 
            *ngFor="let letter of name.split('')" 
            [letter]="letter"
            >
        </character-tile>
    </section>
    <word-tile 
        [word]="name"
        (clicked)="handleWordClicked($event)"
        >
    </word-tile>
`;

const styles = `
    section#characters {
       display: flex; 
    }
`;

@Component({
    selector: 'app-main',
    template: html,
    styles: [styles]
})
class AppComponent {
    name = 'world!';
    handleWordClicked = (word: string) => {
        console.log(word);
    };
};

export default AppComponent;

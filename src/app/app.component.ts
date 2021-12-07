import { Component } from '@angular/core';

const html = `
    <h1>Selected word: {{name}}</h1>
    <section id='characters'>
        <character-tile 
            *ngFor="let letter of name.split('')" 
            [letter]="letter"
            >
        </character-tile>
    </section>
    <section id='words'>
        <h2>Choose a word to split:</h2>
        <word-button
            *ngFor="let word of words" 
            [word]="word"
            (clicked)="handleWordClicked($event)"
            >
        </word-button>
    </section>
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
    words = [
        'Hello',
        'world!',
        'Harley',
        'testing'
    ];
    name = 'Hello';
    handleWordClicked = (word: string) => {
        this.name = word;
        console.log(`Updated "AppComponent.name" to: ${word}`);
    };
};

export default AppComponent;

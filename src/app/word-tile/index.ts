import { Component, Input } from '@angular/core';

const html = `
    <button (click)="handleClick()">
        {{word}}
    </button>
`;

@Component({
    selector: 'word-tile',
    template: html,
})
class WordComponent {
    @Input() word: string = '';
    handleClick = () => {
        console.log('clicked!')
    };
};

export default WordComponent;

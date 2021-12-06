import { Component, Input, Output, EventEmitter } from '@angular/core';

const html = `
    <button (click)="handleClick()">
        {{word}}
    </button>
`;

const styles = `
    button {
        color: blue;
    }
`;

@Component({
    selector: 'word-tile',
    template: html,
    styles: [styles],
})
class WordComponent {
    @Input() word: string = '';
    @Output() clicked = new EventEmitter();
    handleClick = () => {
        this.clicked.emit(this.word);
    };
};

export default WordComponent;

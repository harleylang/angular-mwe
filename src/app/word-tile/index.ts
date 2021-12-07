import { Component, Input, Output, EventEmitter } from '@angular/core';

const html = `
    <button 
        *ngIf="selected !== word"
        (click)="handleClick()">
        {{word}}
    </button>
`;

const styles = `
    button {
        color: blue;
        margin-right: 8px;
    }
`;

@Component({
    selector: 'word-button',
    template: html,
    styles: [styles],
})
class WordButton {
    @Input() word: string = '';
    @Input() selected: string = '';
    @Output() clicked = new EventEmitter();
    handleClick = () => {
        this.clicked.emit(this.word);
    };
};

export default WordButton;

import { Component, Input } from '@angular/core';

const html = `
    <div>
        <span>{{letter}}</span>
        <br/>
    </div>
`;

@Component({
    selector: 'character-tile',
    template: html,
})
class CharacterTile {
    @Input() letter: string = '';
};

export default CharacterTile;

import { Component } from '@angular/core';

const html = `
    <div>
        <span>letter will go here</span>
    </div>
`;

@Component({
    selector: 'character-tile',
    template: html,
})
class CharacterTile {

};

export default CharacterTile;

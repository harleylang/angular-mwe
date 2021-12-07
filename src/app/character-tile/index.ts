import { Component, Input } from '@angular/core';

const html = `
    <div class='letter__container'>
        <div class='letter__inner'>
            <span>{{letter}}</span>
            <br/>
        </div>
    </div>
`;

const styles = `
    div.letter__container {
        margin: 10px;
        width: 100px;
        height: 125px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
    }
    div.letter__inner {
        margin: 10px;
        background-color: grey;
        width: 50px;
        text-align: center;
    }
    span {
        color: white;
        font-size: 50px;
        font-weight: 900;
    }
`;

@Component({
    selector: 'character-tile',
    template: html,
    styles: [styles],
})
class CharacterTile {
    @Input() letter: string = '';
};

export default CharacterTile;

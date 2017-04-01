import {Component, Input} from '@angular/core';

@Component({
    selector: 'love',
    template: `
        <span>{{ totalLikes }}</span>
        <span 
            class="glyphicon glyphicon-heart"
            [class.highlighted]="iLike"
            (click)="onClick()" >
        </span>
        
    `,
    styles: [`
        .glyphicon-heart{
            color: #ccc;
            cursor: pointer;
        }
        
        .highlighted{
            color: deeppink;
        }
    `]
})

export class LoveComponent{
    @Input() totalLikes = 10;
    @Input() iLike = false;

    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}
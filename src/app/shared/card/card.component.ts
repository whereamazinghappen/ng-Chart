import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() game:{};
  constructor() { }

  ngOnInit() {
    console.log(this.game);
  }

}

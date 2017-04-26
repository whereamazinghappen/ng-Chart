import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() game:{};
  constructor(private router:Router) { }
  analyse(id:number){
    this.router.navigate(['/chart'],{queryParams:{id:id}});
    alert("数据分析"+id);
  };
  talkabout(id:number){
    alert("赛后讨论"+id)
  }
  ngOnInit() {
    console.log(this.game);
  }

}

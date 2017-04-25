import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    games: {}[];

  constructor() {
  }
  ngOnInit() {
    this.games=[
          {gameTime:'2017-04-23 08:00:00',
           gameStatus:0,
          teams:[{name:'马刺',icon:'http://n.sinaimg.cn/sports/nba/thewire/SA_new.png',points:108,ishome:true},{name:'灰熊',icon:'',points:99,ishome:false}]
          },
          {gameTime:'2017-04-23 08:00:00',
           gameStatus:0,          
          teams:[{name:'马刺',icon:'',points:108,ishome:true},{name:'灰熊',icon:'',points:99,ishome:false}]
          },
          {gameTime:'2017-04-23 08:00:00',
           gameStatus:0,          
          teams:[{name:'马刺',icon:'',points:108,ishome:true},{name:'灰熊',icon:'',points:99,ishome:false}]
          },
          {gameTime:'2017-04-23 08:00:00',
           gameStatus:0,          
          teams:[{name:'马刺',icon:'',points:108,ishome:true},{name:'灰熊',icon:'',points:99,ishome:false}]
          }
       ];
  }

}

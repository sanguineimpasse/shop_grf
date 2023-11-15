import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string = '';//change 'string' according to data type
  @Input() content: string = '';
  @Input() subContent: string = '';

  @Input() type: string = '';
  showSecondCard : boolean = false;

  ngOnInit(): void {
    console.log("card inputter working :D")
    if(this.type == "mahalGas"){
      this.showSecondCard = true
    }else{
      
    }
  }
}

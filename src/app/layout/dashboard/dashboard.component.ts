import { Component, OnInit } from '@angular/core';
import { dashboard_cards_data } from 'src/data/shared_data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardData = dashboard_cards_data;

  ngOnInit(): void {
    console.log(this.cardData);
  }
}

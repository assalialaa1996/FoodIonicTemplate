import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
tab: string = "approved_items";
  constructor(private route: Router,) { }

  ngOnInit() {
  }
	
 item_detail() {
    this.route.navigate(['./item-detail']);
  }  
 add_item() {
    this.route.navigate(['./add-items']);
  } 

}

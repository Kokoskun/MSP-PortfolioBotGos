import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public titleHome:string ="Welcome To My Portfolio";
	public subTitleHome:string ="Mr.Patipan Nakarin";
	constructor() { }
	ngOnInit() {}
}

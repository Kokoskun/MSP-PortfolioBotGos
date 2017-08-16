import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	public urlPN:string ='https://patipan-nakarin.com';
	public copyrightName:string ='Patipan Nakarin';
	public copyrightYear:number =2016;
	constructor() { }
	ngOnInit() {}
}

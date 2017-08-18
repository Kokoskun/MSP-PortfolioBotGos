import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  private actionImageOver(localImage:string){
    $('#'+localImage).addClass("ld ld-shake x4");
    setTimeout(function(){ $('#'+localImage).removeClass("ld ld-shake x4"); }, 3500);		 
  }
	private actionImageOut(localImage:string){
		$('#'+localImage).removeClass("ld ld-shake x4");
	}
  constructor() { }
  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  public actionImageOverShake(localImage:string){
    $('#'+localImage).addClass("ld ld-shake x4");
    setTimeout(function(){ $('#'+localImage).removeClass("ld ld-shake x4"); }, 3500);		 
  }
	public actionImageOutShake(localImage:string){
		$('#'+localImage).removeClass("ld ld-shake x4");
  }
	public actionImageOverHeartbeat(localImage:string){
    $('#'+localImage).addClass("ld ld-heartbeat x4");
    setTimeout(function(){ $('#'+localImage).removeClass("ld ld-heartbeat x4"); }, 3000);
    
 }
 public actionImageOutHeartbeat(localImage:string){
   $('#'+localImage).removeClass("ld ld-heartbeat x4");
 }
  constructor() { }
  ngOnInit() {
  }
}

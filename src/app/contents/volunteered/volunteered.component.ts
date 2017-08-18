import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-volunteered',
  templateUrl: './volunteered.component.html',
  styleUrls: ['./volunteered.component.css']
})
export class VolunteeredComponent implements OnInit {
	public actionImageOverHeartbeatVG(localImage:string){
    $('#'+localImage).addClass("ld ld-heartbeat x4");
    setTimeout(function(){ $('#'+localImage).removeClass("ld ld-heartbeat x4"); }, 3000);
    
 }
 public actionImageOutHeartbeatVG(localImage:string){
   $('#'+localImage).removeClass("ld ld-heartbeat x4");
 }
  constructor() { }
  ngOnInit() {
  }

}

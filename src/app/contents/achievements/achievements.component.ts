import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
	public actionImageOverHeartbeatAG(localImage:string){
    $('#'+localImage).addClass("ld ld-heartbeat x4");
    setTimeout(function(){ $('#'+localImage).removeClass("ld ld-heartbeat x4"); }, 3000);
    
 }
 public actionImageOutHeartbeatAG(localImage:string){
   $('#'+localImage).removeClass("ld ld-heartbeat x4");
 }
  constructor() { }
  ngOnInit() {
  }
}

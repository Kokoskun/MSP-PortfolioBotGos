import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
	public actionImageOverTick(localImage:string){
		 $('#'+localImage).addClass("ld ld-tick x4");
     setTimeout(function(){ $('#'+localImage).removeClass("ld ld-tick x4"); }, 3500);		 
	}
  public actionImageOverJump(localImage:string){
		 $('#'+localImage).addClass("ld ld-jump x4");
     setTimeout(function(){ $('#'+localImage).removeClass("ld ld-jump x4"); }, 3500);		 
	}
}

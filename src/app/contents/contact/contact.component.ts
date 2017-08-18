import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public actionImageOverJumpC(localImage:string){
    $('#'+localImage).addClass("ld ld-jump x4");
    setTimeout(function(){ $('#'+localImage).removeClass("ld ld-jump x4"); }, 3500);		 
 }
  constructor() { }

  ngOnInit() {
  }

}

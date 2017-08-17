import { Component, OnInit,Input } from '@angular/core';
import { TimeService } from '../model/time/time.service';
import { Time } from '../model/time/time';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
  providers: [TimeService]
})
export class ContentsComponent implements OnInit {
  public valueTime:Array<Time>;
  public isTimeService:boolean = false;
  constructor(private timeService: TimeService) {
    this.setTime();
  }
  ngOnInit() {
    Observable.interval(1000).subscribe(() => {this.setTime()});
  }
  private setTime(){
    this.timeService.getTimes().subscribe(res=> this.valueTime = res,error=>this.isTimeService=false,()=>this.isTimeService=true);
  }
}

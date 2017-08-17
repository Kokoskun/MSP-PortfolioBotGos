import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class TimeService {
	private apiKey:string ='AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY';
	private sortBy:string = 'Asia/Bangkok';
	private apiUrl:string =`https://script.google.com/macros/s/${this.apiKey}/exec?tz=${this.sortBy}`;
	constructor(private http: Http) { }
	public getTimes(){
		return this.http.get(this.apiUrl).map((res:Response)=>res.json()).catch(this.handleError);
	}
	public handleError(error:any) {
		return Observable.throw(error.json().error || 'Server error');
	}
}

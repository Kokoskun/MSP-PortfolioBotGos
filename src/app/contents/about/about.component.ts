import { Component,OnInit,Input } from '@angular/core';
import { ContentsComponent } from '../contents.component';
import { Observable } from 'rxjs/Rx';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	@Input() objectTime:ContentsComponent;
	@Input() isTimeService:ContentsComponent;
	public textNickname:string = 'Gos';
	public textFirstName:string = 'Patipan';
	public textLastName:string = 'Nakarin';
	public infoUser:string='Currently are Studying in Software Engineering of Engineering Program at Thammasat University';
	public textGender:string = 'Male';
	public nameHighSchool:string='Triam Udom Suksa School';
	public majorHighSchool:string='Science - Mathematics - Management';
	public yearFullHighSchool:string='2011-2014';
	public textLanguages:string = 'Thai and English';
	public yearFullUniversity:string='2014-2018';
	public nameUniversity:string='Thammasat University';
	public bachelorUniversity:string='Bachelor of Engineering Program';
	public concentrationUniversity:string='Concentration in Software Engineering';
	public currentPosition:string='Full Stack Developer/Student';
	public beforeBirthDate:number;
	public beforeBirthMonth:number;
	public valueBirthDate:number = 13;
	public valueBirthYear:number =1995;
	private valueBirthMonth:number =8;
	public textBirthMonth:string;
	
	public myAge:number;
	
	public valueYearEducation:number;
	public valueYearAgoEducation:number;
	public valueDayEducation:number;
	public valueMonthEducation:number;
	public valueHoursEducation:number;
	public valueMinutesEducation:number;
	public valueSemesterEducation:number;

	private valueFirstYearEducation:number = 2014;
	private valueEndYearEducation:number = 2018;
	private valueEndMonthEducation:number = 8;

	private valueMonthSemester1:number = 8;
	private valueMonthSemester2:number = 1;
	private valueMonthSemester3:number = 6;

	private valueMonthNow:number;
	private valueDateNow:number;
	private valueYearNow:number;
	private valueHoursNow:number;
	private valueMinutesNow:number;
	constructor() {
		this.getTime();
		this.getAge(this.valueBirthDate,this.valueBirthMonth,this.valueBirthYear);
		this.setTextMonth(this.valueBirthMonth);
		this.getYearEducation(this.valueFirstYearEducation,this.valueEndYearEducation,this.valueEndMonthEducation);
	}
	private getTime(){
		var isTimeService = this.isTimeService;
		if(isTimeService) { 
			this.valueDateNow = this.objectTime['day'];
			this.valueMonthNow = this.objectTime['month'];
			this.valueYearNow = this.objectTime['year'];
			this.valueHoursNow = this.objectTime['hours'];
			this.valueMinutesNow = this.objectTime['minutes'];
		}
	}
	private getYearEducation(valueFirstYearEducation:number,valueEndYearEducation:number,valueEndMonthEducation:number){
		var valueYear = this.valueYearNow;
		var valueTotalYearEnd = valueEndYearEducation - valueFirstYearEducation;
		var valueTotalYearNow = valueYear - valueFirstYearEducation;
		if(valueTotalYearNow>valueTotalYearEnd) {
			this.valueYearAgoEducation=valueEndYearEducation;
			this.valueYearEducation=valueEndYearEducation;
			this.getSemesterEducation(valueTotalYearNow,valueTotalYearEnd,0);
		}else if(valueTotalYearNow==valueTotalYearEnd){
			this.valueYearEducation=valueEndYearEducation;
			this.valueYearAgoEducation=valueEndYearEducation;
			this.getSemesterEducation(valueTotalYearNow,valueTotalYearEnd,1);
		}else{
			this.valueYearAgoEducation=valueTotalYearNow;
			this.valueYearEducation=valueTotalYearNow;
			this.getSemesterEducation(valueTotalYearNow,valueTotalYearEnd,2);
		}
	}
	private getSemesterEducation(valueTotalYearNow:number,valueTotalYearEnd:number,valueFunction:number){
		var	valueSemester1 = this.valueMonthSemester1;
		var	valueSemester2 = this.valueMonthSemester2;
		var	valueSemester3 = this.valueMonthSemester3;
		var valueMonthNow = this.valueMonthNow;
		var valueEndMonth = this.valueEndMonthEducation;
		var dayEducation=0;
		var monthEducation=0;
		var hoursEducation=0;
		var minutesEducation=0;
		var semesterEducation=0;
		if(valueFunction==2) {
			if((valueMonthNow<=12)&&(valueMonthNow>=valueSemester1)) {
				semesterEducation =1;
				this.valueYearEducation+=1;
			}else if((valueSemester3<=valueMonthNow)&&(valueMonthNow<valueSemester1)){
				semesterEducation =3;
			}else if((valueSemester2<=valueMonthNow)&&(valueMonthNow<valueSemester3)){
				semesterEducation =2;
			}
			dayEducation=this.valueDateNow;
			monthEducation=valueMonthNow;
			hoursEducation=this.valueHoursNow;
			minutesEducation=this.valueMinutesNow;
		}else if(valueFunction==1) { 
			if((valueSemester3<=valueMonthNow)&&(valueMonthNow<valueEndMonth)){
				semesterEducation =3;
				dayEducation=this.valueDateNow;
				monthEducation=valueMonthNow;
				hoursEducation=this.valueHoursNow;
				minutesEducation=this.valueMinutesNow;
			}else if((valueSemester2<=valueMonthNow)&&(valueMonthNow<valueSemester3)){
				semesterEducation =2;
				dayEducation=this.valueDateNow;
				monthEducation=valueMonthNow;
				hoursEducation=this.valueHoursNow;
				minutesEducation=this.valueMinutesNow;
			}
		}
		this.valueDayEducation=dayEducation;
		this.valueMonthEducation=monthEducation;
		this.valueHoursEducation=hoursEducation;
		this.valueMinutesEducation=minutesEducation;
		this.valueSemesterEducation=semesterEducation;
	}
	private setTextMonth(valueMonth:number){
		let textMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		this.textBirthMonth = textMonth[valueMonth-1];
	}
	private getAge(valueBirthDate,valueBirthMonth,valueBirthYear) {
		var valueDate = this.valueDateNow;
		var valueMonth = this.valueMonthNow;
		var valueFullYear = this.valueYearNow;
		var totalYear = valueFullYear-valueBirthYear;
		var totalMonth = valueMonth-valueBirthMonth;
		var totalDate = valueDate-valueBirthDate;
		var isDate = this.getBirthDate(totalDate);
		var isMonth = this.getBirthMonth(totalMonth);
		this.getBirthYear(totalYear);
		if(isMonth) {
			if((valueBirthMonth==valueMonth)) {
				if(!isDate) {
					this.myAge-=1;
				}
			}
		}else{
			this.myAge-=1;
		}
	}
	private getBirthDate(valueDate){
		if(valueDate>=0) {
			this.beforeBirthDate = valueDate;
			return true;
		}else{
			this.beforeBirthDate = -(valueDate);
			return false;
		}
	}
	private getBirthMonth(valueMonth){
		if(valueMonth>=0) {
			this.beforeBirthMonth = valueMonth;
			return true;
		}else{
			this.beforeBirthMonth = -(valueMonth);
			return false;
		}
	}
	private getBirthYear(valueFullYear){
			this.myAge = valueFullYear;
	}
	public actionImageOver(localImage:string){
		 $('#'+localImage).addClass("ld ld-heartbeat x4");
		 setTimeout(function(){ $('#'+localImage).removeClass("ld ld-heartbeat x4"); }, 3000);
		 
	}
	public actionImageOut(localImage:string){
		$('#'+localImage).removeClass("ld ld-heartbeat x4");
	}
   ngOnInit() {
		Observable.interval(1000).subscribe(() => {
			this.getTime(),
			this.getAge(this.valueBirthDate,this.valueBirthMonth,this.valueBirthYear),
			this.getYearEducation(this.valueFirstYearEducation,this.valueEndYearEducation,this.valueEndMonthEducation)});
	}
}

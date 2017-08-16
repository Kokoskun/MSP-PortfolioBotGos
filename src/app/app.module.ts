import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './contents/home/home.component';
import { AboutComponent } from './contents/about/about.component';
import { SkillsComponent } from './contents/skills/skills.component';
import { AchievementsComponent } from './contents/achievements/achievements.component';
import { VolunteeredComponent } from './contents/volunteered/volunteered.component';
import { ActivitiesComponent } from './contents/activities/activities.component';
import { ContactComponent } from './contents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    AchievementsComponent,
    VolunteeredComponent,
    ActivitiesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { MatchComponent } from './match/match.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { CommentryComponent } from './match/commentry/commentry.component';
import { NewmatchComponent } from './admin/newmatch/newmatch.component';
import { FormsModule } from '@angular/forms';
import { DefineteamsComponent } from './admin/defineteams/defineteams.component';
import { PlayerComponent } from './admin/defineteams/player/player.component';
import { InningsComponent } from './admin/innings/innings.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    MatchComponent,
    ScorecardComponent,
    CommentryComponent,
    NewmatchComponent,
    DefineteamsComponent,
    PlayerComponent,
    InningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

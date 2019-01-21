import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MatchComponent } from './match/match.component';
import { CommentryComponent } from './match/commentry/commentry.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { NewmatchComponent } from './admin/newmatch/newmatch.component';
import { DefineteamsComponent } from './admin/defineteams/defineteams.component';
import { InningsComponent } from './admin/innings/innings.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'match', 
    component: MatchComponent,
    children:[
      { path:'scorecard',component:ScorecardComponent },
      { path:'commentry',component:CommentryComponent }
    ]
  },
  {path: 'admin',
    component:AdminComponent,
    children: [
      { path: 'newmatch', component: NewmatchComponent },
      { path: 'defineteams', component:DefineteamsComponent},
      { path: 'innings', component: InningsComponent }
      
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

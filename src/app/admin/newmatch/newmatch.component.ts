import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.component.html',
  styleUrls: ['./newmatch.component.css']
})
export class NewmatchComponent implements OnInit {
  team1Name:string;
  team2Name:string;
  toss:string;
  decision;
  overs:number;
  
  constructor( private matchService:MatchService,private router: Router,
    private route: ActivatedRoute) { }
    
    ngOnInit() {
    }
    
    onDefineTeams() {
      if((this.toss==this.team1Name) && (this.decision==1) ){
        this.matchService.getMatch().setTeamName(this.team1Name,this.team2Name);
      }
      if((this.toss==this.team2Name) && (this.decision==1)) {
        this.matchService.getMatch().setTeamName(this.team2Name,this.team1Name);
      }
      if((this.toss==this.team1Name) && (this.decision==2) ){
        this.matchService.getMatch().setTeamName(this.team2Name,this.team1Name);
      }
      if((this.toss==this.team2Name) && (this.decision==2)) {
        this.matchService.getMatch().setTeamName(this.team1Name,this.team2Name);
      }

      this.matchService.getMatch().setTossWinningTeam(this.toss,this.decision);
      this.matchService.getMatch().setOversForMatch(this.overs);
      this.matchService.setMatchState();
      this.router.navigate(['/admin/defineteams'], { relativeTo:this.route });
      
    }
}

  
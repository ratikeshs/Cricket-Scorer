import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-innings',
  templateUrl: './innings.component.html',
  styleUrls: ['./innings.component.css']
})


export class InningsComponent implements OnInit {
  
  onStrikeBatsmanName:string;
  nonStrikeBatsmanName:string;
  bowlerName:string;
  balls:number;
  runsPerBall:number;
  wicketType:string;
  catchBy: string;
  runOutBy: string;
  numberOfOvers: number;
  commentry: string;
  Team1TotalRuns:number=0;
  currentBall = 0;
  currentOver = 0;
  
  @ViewChild('ball') ballInTS: ElementRef;
  @ViewChild('over') overInTS: ElementRef;
  
  constructor(public matchService:MatchService, private router:Router, private route:ActivatedRoute) { 
    console.log(matchService.getMatch().getTeam1().getPlayerNames());
    console.log(matchService.getMatch().getTeam2().getPlayerNames());
  }
  
  ngOnInit() {
  }
  
  onAddScoreClick(){
    
    this.currentBall++;
    if (this.currentBall > 6) {
      this.currentBall = 1;
      this.currentOver++;
      if(this.currentOver < this.matchService.getMatch().getNumberOfOvers()){
      }
      else{
        this.matchService.getMatch().setInningFinshedMessage("First Inning Finished !!");
        console.log("1st finsished");
        this.currentBall = 0;
        this.currentOver = 0;
        
      }
    }
    this.matchService.getMatch().saveCommentryDetails(this.onStrikeBatsmanName,this.nonStrikeBatsmanName,this.bowlerName,this.currentBall,this.runsPerBall,this.wicketType,this.catchBy,this.runOutBy,this.currentOver,this.commentry);
    console.log(this.commentry);
  }
}

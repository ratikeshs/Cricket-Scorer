import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-defineteams',
  templateUrl: './defineteams.component.html',
  styleUrls: ['./defineteams.component.css']
})
export class DefineteamsComponent implements OnInit {
  
  constructor(private matchService:MatchService, private router:Router, private route:ActivatedRoute) {
    console.log(matchService.getMatch().getTeam1Name());
  }
  
  ngOnInit() {
  }
  
  onStartButtonClick(){
    if(this.matchService.getMatch().getTeam1().isTeamComplete()){
      this.matchService.setMatchState();
      this.router.navigate(['/admin/innings'], { relativeTo:this.route });
    }
  }
  
}

import { Batting } from 'src/app/model/batting';
import { Bowling} from 'src/app/model/bowling';
export class Player{
    
    private name:string;
    private player1TotalRuns:number=0;
    private player2TotalRuns:number=0;
    private player1TotalBalls: number=0;
    private player2TotalBalls: number=0;
    
    private batting:Batting;
    private bowling:Bowling;
    
    constructor() {
        this.batting=new Batting();
        this.bowling=new Bowling(); 
    }
    
    setPlayerName(name){
        this.name=name;
    }
    
    getPlayerName() {
        return this.name;
    }

    

    // setPlayer1TotalRuns(player1TotalRuns) {
    //     this.player1TotalRuns+=player1TotalRuns;
    // }

    // setPlayer2TotalRuns(player2TotalRuns) {
    //     this.player2TotalRuns+=player2TotalRuns;
    // }

    // setPlayer1TotalBalls(player1TotalBalls) {
    //     this.player1TotalBalls+=player1TotalBalls;
    // }

    // setPlayer2TotalBalls(player2TotalBalls) {
    //     this.player2TotalBalls+=player2TotalBalls;
    // }

    // getPlayer1TotalRuns() {
    //     return this.player1TotalRuns;
    // }

    // getPlayer2TotalRuns() {
    //     return this.player2TotalRuns;
    // }

    // getPlayer1TotalBalls() {
    //     return this.player1TotalBalls;
    // }
    // getPlayer2TotalBalls() {
    //     return this.player2TotalBalls;
    // }
}
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateTeamDTO, Team } from 'src/app/models/team.model';
import { StoreService } from 'src/app/services/store.service';
import { TeamsService } from 'src/app/services/teams.service';
import {NgForm} from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { CreatePlayerDTO, Player, PlayerDTO } from 'src/app/models/player.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams:Team []=[];
  myListTeams:Team[]=[];

  showDetail=false;
  team:Team  | null = null;
  teamId:string| null = null;
  country:string='';
  photo:string='';

  newTeam:CreateTeamDTO ={
    country:"",
    photo:""
  }
  player:PlayerDTO={
    player:"",
    nation:"",
    photo:""
  }

  players:Player[]=[
    {playerId:0,
      player:"",
    nation:"",
    photo:"",
    teamId:0}
  ];

  
  constructor(
    private route:ActivatedRoute,
    private teamService:TeamsService,
    private playerService:PlayersService,
    private store:StoreService
  ) {
   this.myListTeams= this.store.getTeams();

   if(this.teamId){
    this.onShowDetail(this.teamId)
  }
   }

  ngOnInit(): void {

    this.teamService.getAll().subscribe((teams)=>{
      this.teams=teams;
      console.log(teams);
    })

    this.route.queryParamMap.subscribe((params)=>{
      this.teamId=  params.get('team');
    })
  }
  

  onAddTeam(team:Team){
    this.store.addTeam(team);
  }

  onToggleTeam(){
    this.showDetail=!this.showDetail;
  }
  onShowDetail(id:string){
    if(!this.showDetail){
      this.showDetail=true;
    }
    this.teamService.getOne(id).subscribe(
      (team)=>this.team=team
    );
    
    this.playerService.getOneByIdTeam(id).subscribe((data)=>{
      this.players= data;
      console.log(data)
    })
    
  }

  createTeam(){
    this.teamService.create(this.newTeam).subscribe(
      newTeam=>{
        this.teams.push(newTeam);
        this.newTeam={country:"",photo:""};
      }
    )  
  }
  deleteTeam(){
    if(this.team){
      const id= String(this.team.teamId);
      this.teamService.delete(id).subscribe(()=>{

        const teamIndex = this.teams.findIndex(
          (item)=> item.teamId===this.team?.teamId
        );

        this.teams.splice(teamIndex,1);
        this.showDetail=false;
      })
    }
  }

  createPlayer(){
    if(this.team){
      let dto:CreatePlayerDTO={
        ...this.player,
        teamId:this.team.teamId
      }
      
      this.playerService.create(dto).subscribe((data)=>{
        this.players.push(data);
        this.player={
          player:"",
          nation:"",
          photo:""
        }
      
        console.log(data)
      })
    }
    //this.playerService()
  }

  deletePlayer(id:number){
    const idplayer=String(id)
    console.log("el id:",idplayer)
    this.playerService.delete(idplayer).subscribe((data)=>{
      console.log(data)
    })
  }

}

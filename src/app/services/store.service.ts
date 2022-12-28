import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myStoreTeams: Team[]=[];
  private myTeams= new BehaviorSubject<Team[]>([]);
  myTeams$ = this.myTeams.asObservable()

  constructor() { }

  addTeam(team:Team){
    this.myStoreTeams.push(team);
    this.myTeams.next(this.myStoreTeams);
  }
  getTeams(){
    return this.myStoreTeams;
  }
}

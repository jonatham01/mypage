import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTeamDTO, Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl = `/teams`;

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    console.log("okeey")
    return this.http.get<Team[]>(`${this.apiUrl}/all`);
    
  }
  getOne(id:string){
    return this.http.get<Team>(`${this.apiUrl}/${id}`)
  }
  create (team:CreateTeamDTO){
    return this.http.post<Team>(`${this.apiUrl}/save`,team);
  }
  delete(id:string){
    return this.http.delete<boolean>(`${this.apiUrl}/delete/${id}`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePlayerDTO, Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private urlApi= `/players`;

  constructor(private http: HttpClient) { }

  getAll(){
    this.http.get<Player>(`${this.urlApi}/all`)
  }
  getOne(id:number){
    this.http.get<Player>(`${this.urlApi}/{id}`)
  }
  create(player:CreatePlayerDTO){
    console.log("ey",player);
    return this.http.post<Player>(`${this.urlApi}/save`,player);
    
    
  }
  delete(id:string){
    console.log("mierdaaa",id)
    console.log(`${this.urlApi}/delete/${id}`);
   return  this.http.delete<boolean>(`${this.urlApi}/delete/${id}`)
   
  }

  getOneByIdTeam(id:string){
    return this.http.get<Player[]>(`${this.urlApi}/team/${id}`);
  }
}

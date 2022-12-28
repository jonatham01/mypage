export interface Player{
    playerId:number,
    player:string,
    nation:string,
    photo:string,
    teamId:number
}

export interface CreatePlayerDTO extends Omit<Player,"playerId">{}

export interface PlayerDTO extends Omit<CreatePlayerDTO ,"teamId">{}

export interface UpdateProductDTO extends Partial<CreatePlayerDTO> { }
  
  
export interface Team{
    teamId:number,
    country:string,
    photo:string
}

export interface CreateTeamDTO extends Omit<Team, 'teamId'> {
  }
  
  export interface UpdateProductDTO extends Partial<CreateTeamDTO> { }
  
  
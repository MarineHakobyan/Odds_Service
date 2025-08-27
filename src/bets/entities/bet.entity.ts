export class Bet {
  constructor(
    public id: string,
    public matchId: string,
    public pick: 'home' | 'draw' | 'away',
    public stake: number,
    public oddsVersion: number,
  ) {}
}

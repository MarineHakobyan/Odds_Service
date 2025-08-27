import { IOdds } from '../../common/types/odds.interface';

export class Match {
  constructor(
    public id: string,
    public homeTeam: string,
    public awayTeam: string,
    public startsAt: string,
    public odds: IOdds,
  ) {}
}

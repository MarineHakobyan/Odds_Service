import { IOdds } from './odds.interface';

export interface IMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  startsAt: string;
  odds: IOdds;
}

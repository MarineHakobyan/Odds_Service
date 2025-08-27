import { TCreateOdd } from './odds.interface';

export interface IMatch {
  id?: string;
  homeTeam: string;
  awayTeam: string;
  startsAt: string;
  odds: TCreateOdd;
}

export type TCreateMatch = Omit<IMatch, 'id'>;

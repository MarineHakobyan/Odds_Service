import { IOdds } from '../../../common/types/odds.interface';

export class MatchesResponseDto {
  id: string;
  homeTeam: string;
  awayTeam: string;
  startsAt: string;
  odds: IOdds;
}

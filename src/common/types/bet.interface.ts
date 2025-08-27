import { PickOption } from '../../modules/bets/dto/create-bet.dto';

export interface IBet {
  id: string;
  matchId: string;
  pick: PickOption;
  stake: number;
  oddsVersion: number;
}

export type TCreateBet = Omit<IBet, 'id'>;

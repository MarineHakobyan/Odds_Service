import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Bet } from './entities/bet.entity';
import { CreateBetDto } from './dto/create-bet.dto';
import { MatchesService } from '../matches/matches.service';

@Injectable()
export class BetsService {
  private bets = new Map<string, Bet>();

  constructor(private readonly matchesService: MatchesService) {}

  create(body: CreateBetDto): Bet {
    const match = this.matchesService.findById(body.matchId);
    if (!match) throw new NotFoundException('Match not found');

    if (body.oddsVersion !== match.odds.version) {
      throw new ConflictException('Odds version mismatch');
    }

    const id = uuidv4();
    const bet = new Bet(
      id,
      body.matchId,
      body.pick,
      body.stake,
      body.oddsVersion,
    );
    this.bets.set(id, bet);

    return bet;
  }
}

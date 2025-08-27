import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Match } from './entities/match.entity';
import { Odds } from './entities/odds.entity';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateOddsDto } from './dto/update-odds.dto';

@Injectable()
export class MatchesService {
  private matches = new Map<string, Match>();

  create(createMatchDto: CreateMatchDto): Match {
    const id = uuidv4();
    const odds = new Odds(
      createMatchDto.odds.home,
      createMatchDto.odds.draw,
      createMatchDto.odds.away,
      1,
    );
    const match = new Match(
      id,
      createMatchDto.homeTeam,
      createMatchDto.awayTeam,
      createMatchDto.startsAt,
      odds,
    );

    this.matches.set(id, match);

    return match;
  }

  updateOdds(id: string, dto: UpdateOddsDto): Odds {
    const match = this.matches.get(id);
    if (!match) throw new NotFoundException('Match not found');

    if (dto.home) match.odds.home = dto.home;
    if (dto.draw) match.odds.draw = dto.draw;
    if (dto.away) match.odds.away = dto.away;

    match.odds.version += 1;

    return match.odds;
  }

  getOdds(id: string): Odds {
    const match = this.matches.get(id);

    if (!match) throw new NotFoundException('Match not found');

    return match.odds;
  }

  findById(id: string): Match | undefined {
    return this.matches.get(id);
  }
}

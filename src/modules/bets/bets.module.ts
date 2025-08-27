import { Module } from '@nestjs/common';

import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';
import { MatchesModule } from '../matches/matches.module';

@Module({
  imports: [MatchesModule],
  providers: [BetsService],
  controllers: [BetsController],
})
export class BetsModule {}

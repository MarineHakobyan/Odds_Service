import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesModule } from './modules/matches/matches.module';
import { BetsModule } from './modules/bets/bets.module';

@Module({
  imports: [MatchesModule, BetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BetsService } from './bets.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { Bet } from './entities/bet.entity';

@ApiTags('Bets')
@Controller('bets')
export class BetsController {
  constructor(private readonly betsService: BetsService) {}

  @Post()
  create(@Body() betData: CreateBetDto): Bet {
    return this.betsService.create(betData);
  }
}

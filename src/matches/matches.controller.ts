import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { MatchesService } from './matches.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateOddsDto } from './dto/update-odds.dto';
import { OddsResponseDto } from './dto/odds-response.dto';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  create(@Body() dto: CreateMatchDto) {
    return this.matchesService.create(dto);
  }

  @Patch(':id/odds')
  updateOdds(@Param('id') id: string, @Body() dto: UpdateOddsDto) {
    return this.matchesService.updateOdds(id, dto);
  }

  @Get(':id/odds')
  getOdds(@Param('id') id: string): OddsResponseDto {
    return this.matchesService.getOdds(id);
  }
}

import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsPositive, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { TCreateBet } from '../../../common/types/bet.interface';

export type PickOption = 'home' | 'draw' | 'away';

export class CreateBetDto implements TCreateBet {
  @IsUUID()
  @ApiProperty()
  matchId: string;

  @IsEnum(['home', 'draw', 'away'], { message: 'Pick invalid' })
  @ApiProperty()
  pick: PickOption;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Stake invalid' })
  @Type(() => Number)
  @ApiProperty()
  stake: number;

  @IsNumber({}, { message: 'Odds version invalid' })
  @IsPositive({ message: 'Version must be > 0' })
  @Type(() => Number)
  @ApiProperty()
  oddsVersion: number;
}

import { Type } from 'class-transformer';
import {
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  Min,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OddsDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Home odds invalid' })
  @Min(1.01, { message: 'Home odds too low' })
  home: number;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Draw odds invalid' })
  @Min(1.01, { message: 'Draw odds too low' })
  draw: number;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Away odds invalid' })
  @Min(1.01, { message: 'Away odds too low' })
  away: number;
}

export class CreateMatchDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Home team required' })
  homeTeam: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Away team required' })
  awayTeam: string;

  @ApiProperty()
  @IsISO8601({}, { message: 'Invalid date' })
  startsAt: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => OddsDto)
  odds: OddsDto;
}

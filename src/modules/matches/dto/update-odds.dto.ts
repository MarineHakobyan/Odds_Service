import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateOddsDto {
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1.01)
  @ApiProperty()
  home?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1.01)
  @ApiProperty()
  draw?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1.01)
  @ApiProperty()
  away?: number;
}

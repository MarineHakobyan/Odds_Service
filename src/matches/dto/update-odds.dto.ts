import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateOddsDto {
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1.01)
  home?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1.01)
  draw?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1.01)
  away?: number;
}

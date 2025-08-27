export interface IOdds {
  home: number;
  draw: number;
  away: number;
  version: number;
}

export type TCreateOdd = Omit<IOdds, 'version'>;

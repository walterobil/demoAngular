import { Street } from './street';
export interface City {
  id: number;
  name: string;
  streets: Street[];
}

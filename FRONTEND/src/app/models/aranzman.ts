import { Hotel } from "./hotel";
import { TuristickaAgencija } from "./turisticka-agencija";

export class Aranzman {
    id!: number;
    ukupnaCena!: number;
    placeno!: boolean;
    datumRealizacije!: Date;
    hotel!: Hotel;
    turistickaAgencija!: TuristickaAgencija;
}
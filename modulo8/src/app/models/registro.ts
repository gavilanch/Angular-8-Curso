import { Suscripcion } from './suscripcion.enum';

export interface Registro {
    username: string;
    password: string;
    suscripcion: Suscripcion;
    promociones: boolean;
}

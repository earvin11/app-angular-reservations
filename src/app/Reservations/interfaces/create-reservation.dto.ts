export interface CreateReservationDto {
    startDate: string;
    endDate: string;
    requerimiento: string;
    cantidad_persona: number;
    descripcion: string;
    userId: number;
    salonId: number;
}
import { Injectable } from "@nestjs/common";
import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
    tickets: Ticket[] = [];

    insertPlace(place: number) {}
}
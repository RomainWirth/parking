import { Injectable } from "@nestjs/common";
import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
    tickets: Ticket[] = [];

    insertTicket(created_at: Date, endDate: Date) {
        // const newTicket = new Ticket(new Date().toString(), created_at, endDate, );
    }
}
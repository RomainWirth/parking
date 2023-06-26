import { Controller, Post, Body } from '@nestjs/common';
import { TicketService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
    constructor(private ticketsService: TicketService) {}

    // @Post()
    // addTicket(@Body('ticketNumber') ticketId: number, @Body('')): any {
    //     this.ticketsService.insertTicket();
    // }
}
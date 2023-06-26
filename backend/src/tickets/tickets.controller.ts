import { Controller, Post } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
    @Post()
    addTicket(): any {
        
    }
}
export class Ticket {
    constructor(
        public ticket_id: number, 
        public created_at: Date,
        public endDate: Date,
        public placeId: number,
    ) {}
}
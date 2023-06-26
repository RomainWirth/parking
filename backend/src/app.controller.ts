import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
//import { InjectRepository } from 'typeorm';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

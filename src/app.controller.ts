import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }

  @Get('new')
  newEndpoint() {
    return 'New endpoint';
  }

  @Get('task/:taskId')
  getTask(@Param('taskId') taskId: string) {
    return `task ${taskId}`
  }

  @Get('tasks')
  getTasks(@Query() params: any) {
    const { limit, offset } = params
    return `tasks: limit ${limit}, offset ${offset}`
  }
}

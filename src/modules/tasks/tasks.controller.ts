import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	
	Patch,
	Post,
	Put,
	Query,
	Req,
} from '@nestjs/common';
import { Session, type UserSession } from '@thallesp/nestjs-better-auth';
import type { CreateTaskDto } from './dto/create-task.dto.js';
import type { ListTaskDto } from './dto/list-task.dto.js';
import type { UpdateTaskDto } from './dto/update-task.dto.js';
import { TasksService } from './tasks.service.js';

@Controller('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	create(
		@Session() session: UserSession, 
		@Body() dto: CreateTaskDto) {
		return this.tasksService.create(session.user.id, dto);
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(@Session() session: UserSession, @Query() filters: ListTaskDto) {
		return this.tasksService.findAll(session.user.id, filters);
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	findOne(
		@Session() session: UserSession, 
		@Param('id') id: string) {
		return this.tasksService.findOne(session.user.id, id);
	}

	@Put(':id')
	@HttpCode(HttpStatus.OK)
	update(
		@Session() session: UserSession, 
		@Param('id') id: string, 
		@Body() dto: UpdateTaskDto) {
		return this.tasksService.update(session.user.id, id, dto);
	}

	@Patch(':id/complete')
	@HttpCode(HttpStatus.OK)
	complete(
		@Session() session: UserSession, 
		@Param('id') id: string) {
		return this.tasksService.complete(session.user.id, id);
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	remove(
		@Session() session: UserSession, 
	    @Param('id') id: string) {
		return this.tasksService.remove(session.user.id, id);
	}
}

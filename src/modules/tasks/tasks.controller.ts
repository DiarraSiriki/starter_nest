import { Body,Controller,Delete, Get, 
        HttpCode,HttpStatus,
        Param, ParseIntPipe, 
        Patch, Post, Put, Query } from '@nestjs/common';
import {Session, type UserSession} from '@thallesp/nestjs-better-auth'
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { ListTaskDto } from './dto/list-task.dto.js';


    
@Controller('tasks')
export class TasksController {}

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags } from '@nestjs/swagger';
import { UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Todo')


@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

@UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req) {
    return this.todoService.findAllByUser(req.user.id);
  }
  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTodoDto) {
    return this.todoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.delete(+id);
  }

}
// Bu controller, TodoService'i kullanarak todo işlemlerini yönetir.
// @Get() ile tüm todo'ları getirir, @Post() ile yeni todo ekler,
// @Get(':id') ile belirli bir todo'yu getirir, @Put(':   id') ile
// belirli bir todo'yu günceller ve @Delete(':id') ile belirli  bir todo'yu siler.
// @UseGuards(AuthGuard('jwt')) ile JWT koruması eklenmiştir.
// Bu, kullanıcının kimliğini doğrulamak için JWT token'ını kullanır.
// @Request() req ile kullanıcının kimliğini alır ve todo'ları o
// kullanıcının todo'larıyla sınırlar.
// @Body() ile gelen veriyi alır ve CreateTodoDto veya UpdateTodoDto
// ile doğrular. @Param('id') ile URL'den gelen id parametresini alır.
// @Param('id') ile gelen id parametresini alır ve TodoService'in
// ilgili metodlarına ileterek işlemleri gerçekleştirir.

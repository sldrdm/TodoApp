import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);
    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateTodoDto) {
    await this.todoRepository.update(id, dto);
    return this.todoRepository.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.todoRepository.delete(id);
  }
  // todo.service.ts
async findAllByUser(userId: number) {
  // Örneğin TypeORM kullanıyorsan:
  return this.todoRepository.find({ where: { user: { id: userId } } });
  // Eğer array veya farklı bir yapı kullanıyorsan ona göre uyarlayacaksın.
}

}

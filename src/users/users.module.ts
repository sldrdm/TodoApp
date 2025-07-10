import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService], // başka modüller kullanacaksa
})
export class UsersModule {}
// Bu modül, User entity'sini TypeORM ile kullanmak için gerekli ayarları yapar.
// UsersService'i de dışa aktarır, böylece diğer modüller bu servisi
// kullanabilir. TypeOrmModule.forFeature([User]) ile User entity'si
// TypeORM'un repository'si olarak kaydedilir. Bu sayede UsersService içinde
// User entity'si ile ilgili CRUD işlemleri yapılabilir. Eğer başka modüller
// UsersService'i kullanacaksa, exports kısmında UsersService'i eklememiz
// gerekiyor. Bu, diğer modüllerin UsersService'i import ederek kullanabilmesini sağlar.
// TypeOrmModule.forFeature([User]) ile User entity'si TypeORM'un repository'si olarak kaydedilir.
// Bu sayede UsersService içinde User entity'si ile ilgili CRUD işlemleri yapılabilir.
// Eğer başka modüller UsersService'i kullanacaksa, exports kısmında UsersService'i eklememiz
// gerekiyor. Bu, diğer modüllerin UsersService'i import ederek kullanabilmesini sağlar.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEventsEntity } from './models/entity/user-events.entity';
import { CreateUseEventUseCase } from './use-cases/create-user-event/create-user-event.use-case';
import { DeleteUserEventUseCase } from './use-cases/delete-user-event/delete-user-event.use-case';
import { FindAllUserEventsUseCase } from './use-cases/find-all/find-all.use-case';
import { FindUserEventByIdUseCase } from './use-cases/find-event-by-id/find-event-by-id.use-case';
import { CreateUserEventController } from './use-cases/create-user-event/create-user-event.controller';
import { DeleteUserEventController } from './use-cases/delete-user-event/delete-user-event.controller';
import { FindAllUserEventsController } from './use-cases/find-all/find-all.controller';
import { FindUserEventByIdController } from './use-cases/find-event-by-id/find-event-by-id.controller';
import { UserEventRepository } from './infra/typeorm/user-events.repository';
import { UpdateUserEventController } from './use-cases/update-user-event/update-user-event.controller';
import { UpdateUserEventUseCase } from './use-cases/update-user-event/update-user-event.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserEventsEntity])],
  providers: [
    UserEventRepository,
    CreateUseEventUseCase,
    DeleteUserEventUseCase,
    FindAllUserEventsUseCase,
    FindUserEventByIdUseCase,
    UpdateUserEventUseCase,
  ],
  controllers: [
    CreateUserEventController,
    DeleteUserEventController,
    FindAllUserEventsController,
    FindUserEventByIdController,
    UpdateUserEventController,
  ],
  exports: [],
})
export class UserEventsModule {}

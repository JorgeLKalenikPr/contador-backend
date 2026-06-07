import { UsersEntity } from 'src/modules/users/models/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'user_events',
})
export class UserEventsEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', type: 'character varying' })
  name: string;

  @Column({ name: 'date', type: 'timestamptz' })
  date: Date;

  @ManyToOne(() => UsersEntity, (user) => user.userEvents)
  @JoinColumn({
    name: 'user_id',
  })
  userId: UsersEntity;
}

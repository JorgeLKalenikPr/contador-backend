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

  @Column({ name: 'description', type: 'character varying' })
  description: string;

  @Column({ name: 'date', type: 'timestamptz' })
  date: Date;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => UsersEntity, (user) => user.userEvents)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}

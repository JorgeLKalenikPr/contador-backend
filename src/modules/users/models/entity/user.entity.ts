import { UserEventsEntity } from 'src/modules/users-events/models/entity/user-events.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity({
  name: 'user',
})
export class UsersEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'email', type: 'character varying' })
  email: string;

  @Column({ name: 'email_confirmed', type: 'boolean', default: 'false' })
  emailConfirmed: boolean;

  @OneToMany(() => UserEventsEntity, (userEvent) => userEvent.userId)
  userEvents: UserEventsEntity[];
}

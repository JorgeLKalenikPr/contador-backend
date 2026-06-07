import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'holiday',
})
export class HolidayEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'date', type: 'timestamptz' })
  date: Date;

  @Column({ name: 'name', type: 'character varying' })
  name: string;

  @Column({ name: 'type', type: 'character varying' })
  type: string;
}

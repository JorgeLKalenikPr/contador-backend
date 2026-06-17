import { ApiProperty } from '@nestjs/swagger';

export class FindNextHolidayReturnDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty({
    example: {
      days: 83,
    },
  })
  timeUntil: string;
}

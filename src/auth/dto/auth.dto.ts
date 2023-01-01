import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @ApiProperty({
    default: 'testusername',
  })
  username: string;

  @IsString()
  @ApiProperty({
    default: 'testpassword',
  })
  password: string;
}

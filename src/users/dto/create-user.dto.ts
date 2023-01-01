import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    default: 'testusername',
  })
  @IsString()
  username: string;

  @ApiProperty({
    default: 'test name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    default: 'test@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    default: 'testpassword',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  password: string;

  refreshToken: string;
}

import { IsEmail, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be least 6 characters long'
	})
	@IsString()
	password: string
}

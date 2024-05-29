import { LoginUserDto, RegisterUserDto } from "../dtos";

import { UserEntity } from "../entities/user.entity";





export abstract class UserRepository {

    abstract registerUser(createUserDto: RegisterUserDto): Promise<UserEntity>

    abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>

}
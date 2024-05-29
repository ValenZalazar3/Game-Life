import { LoginUserDto, RegisterUserDto } from "../dtos";

import { UserEntity } from "../entities/user.entity";





export abstract class UserDatasource {

    abstract registerUser(createUserDto: RegisterUserDto): Promise<UserEntity>

    abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>

    abstract findOneByEmail(email: string): Promise<UserEntity>
}
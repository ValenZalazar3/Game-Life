
import { LoginUserDto, RegisterUserDto, UserDatasource, UserRepository } from "../../domain";
import { UserEntity } from "../../domain/entities/user.entity";



export class UserRepositoryImpl extends UserRepository {

    constructor(
        private readonly datasource: UserDatasource
    ) { super() }

    registerUser(createUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.datasource.registerUser(createUserDto)
    }

    loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.datasource.loginUser(loginUserDto)
    }

}
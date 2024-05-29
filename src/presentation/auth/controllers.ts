import { Request, Response } from "express";
import { RegisterUserDto, UserRepository } from "../../domain";
import { RegisterUser } from "../../domain/use-cases/users/register-user";




export class AuthControllers {

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body)
        if (error) return res.status(400).json({ error });

        new RegisterUser(this.userRepository)
            .execute(registerUserDto!)
            .then(goal => res.json(goal))
            .catch(error => res.status(400).json({ error }))
    }
}
import { CustomError } from "../errors/custom.error"



export class UserEntity {
    constructor(
        public id: string,
        public name: string,
        public surname: string,
        public email: string,
        public emailValidated: string,
        public password: string,
        public role: string[],
        public image?: string,
    ) { }

    public static fromObject(object: { [key: string]: any }) {
        const { id, name, surname, email, emailValidated, password, role, image } = object

        if (!id) {
            throw CustomError.badRequest('Missing id')
        }
        if (!name) throw CustomError.badRequest('Missing name')
        if (!surname) throw CustomError.badRequest('Missing surname')
        if (!email) throw CustomError.badRequest('Missing email')
        if (!password) throw CustomError.badRequest('Missing password')
        if (!role) throw CustomError.badRequest('Missing role')
        if (emailValidated === undefined) throw CustomError.badRequest('Missing emailValidated')

        return new UserEntity(id, name, surname, email, emailValidated, password, role, image)

    }

}


interface CreateUserData {
    name?: string
    email: string
    password: string
    techs: Array <string | TechObject> //techs: string[] pra quando for tipo simples
}

interface TechObject {
    title: string
    experience: number
}

export default function createUser({ name, email, password, techs}: CreateUserData) {
        const user = {
            name,
            email,
            password,
            techs,
        }

    return user
}
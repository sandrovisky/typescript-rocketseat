import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response)  {

    const user = createUser({
        email: 'aaa',
        password: 'aaaaa',
        techs: [
            'alaoalaoalaoao', 
            'bebebebebe',
            'arroz',
        {
            title: 'banana',
            experience: 5
        },
        {
            title: 'chcolate',
            experience: 20
        }]
    });

    console.log(user.)
    return response.json({ message: 'hello world!' })
}
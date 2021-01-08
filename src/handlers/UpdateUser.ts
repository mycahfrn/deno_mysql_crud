import { update } from '../repository/user.ts'
import doesUserExists from '../libs/doesUserExists.ts'

export async function updateUser({request, params, response}:any) {
    const { id } = params

    const userExists = await doesUserExists(id)

    if(userExists) {
        const body = request.body()
        const user:any = await body.value

        const { name, country } = user
        response.status = 200;
        response.body = await update(name, country, id)
    } else {
        response.status = 404;
        response.body = {message: 'User not found'}
    }
}
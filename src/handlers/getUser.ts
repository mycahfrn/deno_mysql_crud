import { search } from '../repository/user.ts'
import doesUserExists from '../libs/doesUserExists.ts'

export async function getUser({response, params}: any) {

    const userExists = await doesUserExists(params.id)

    if(userExists) {
        const user = await search(params)
        response.status = 200;
        response.body = user.rows
    } else {
        response.status = 404;
        response.body = {message: 'User not found'}
    }

}
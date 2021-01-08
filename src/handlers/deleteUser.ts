import { remove } from '../repository/user.ts'
import doesUserExists from '../libs/doesUserExists.ts'


export async function deleteUser({params, response}:any) {
    const userExists = await doesUserExists(params.id)
    if(userExists) {
        response.status = 200
        response.body = await remove(params.id)
    } else {
        response.status = 404;
        response.body = {meesage: 'User not found'}
    }
}
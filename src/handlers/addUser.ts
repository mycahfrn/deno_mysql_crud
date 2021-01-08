import { insert } from '../repository/user.ts'

export async function addUser({response, request}:any) {
    const body = await request.body()
    const user = await body.value

    if(user.hasOwnProperty('name') && user.hasOwnProperty('country')) {
        response.status = 200;
        response.body = await insert(user)
    } else {
        response.body = {message: 'Invalid Request'}
    }

    console.log(user)
    response.body = 'Adding User...'
}
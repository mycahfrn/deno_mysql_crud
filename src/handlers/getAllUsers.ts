import { search } from '../repository/user.ts'

export async function getAllUsers(ctx:any) {
    try {
        const result = await search()
        ctx.response.body = result.rows
    } catch (error) {
        throw new Error(error)
    }

}
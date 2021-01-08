import client from '../db.ts'

interface Params {
    id?: string | number
}

export async function search(params : Params = {}){

    const isSpecific = Object.keys(params).length !== 0

    if(isSpecific) {
        return await client.execute('SELECT * FROM user WHERE id = ?', [params.id])
    }
    else {
        return await client.execute('SELECT * FROM user ')
    }
}

interface insertParams {name: string, country: string}

export async function insert({name, country}: insertParams) {
    return await client.execute('INSERT INTO user(name, country) VALUES (?, ?)', [
        name,
        country
    ])
}

export async function remove(id: string) {
    return await client.execute('DELETE FROM user WHERE id = ?', [id])
}

export async function update(name: string, country: string, id: string) {
    return await client.execute('UPDATE user SET name = ?, country= ? WHERE id = ?', [name, country, id])
}
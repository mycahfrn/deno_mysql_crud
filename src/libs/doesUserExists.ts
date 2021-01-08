import client from '../db.ts'

export default async function findById(id: number | string): Promise<boolean> {
    const result = await client.query('SELECT COUNT(*) count FROM user WHERE id = ?', [id])
    return result[0].count >= 1
}
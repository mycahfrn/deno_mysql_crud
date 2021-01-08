import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

import { addUser } from "./handlers/addUser.ts"
import { getAllUsers } from "./handlers/getAllUsers.ts"
import { deleteUser } from "./handlers/deleteUser.ts"
import { updateUser } from "./handlers/updateUser.ts"
import { getUser } from "./handlers/getUser.ts"
import { welcome } from './handlers/index.ts'

router
.get("/", welcome)
.get("/users", getAllUsers)
.get("/users/:id", getUser)
.post("/users", addUser)
.put("/users/:id", updateUser)
.delete("/users/:id", deleteUser)

export default router

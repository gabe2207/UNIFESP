import { App } from "./app"
import { Bike } from "./bike"
import { Rent } from "./rent"
import { User } from "./user"

const app = new App()
const u1 = new User('Joao', 'joao@gmail.com', '1234')
app.addUser(u1)
app.addUser(u1)


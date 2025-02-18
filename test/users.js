
import "dotenv/config"
import { faker } from "@faker-js/faker"
import axios from "axios"

const generateFakeUser = () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.firstName()
  return {
    firstName,
    lastName,
    email: faker.internet.email({ firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase() }),
    password: "test"
  }
}
const user = generateFakeUser()
console.log("user", user)

const createUser = await axios.post(`${process.env.SERVER_URL}/users`, user)
console.log("createUser", createUser.data)
import { it, expect } from "vitest"
import { Expect, Equal } from "@total-typescript/helpers"

const concatName = function (user: { first: string, last?: string }) {
    if (!user.last) {
        return `${user.first}`
    }
    return `${user.first} ${user.last}`
}

it("first and last both are enetered", () => {
    const result = concatName({ first: "John", last: "Doe" })
    type test = Expect<Equal<typeof result, string>>
    expect(result).toEqual("John Doe")
})
it("Only passing the value for first name", () => {
    const result = concatName({ first: "John" })
    expect(result).toEqual("John")
})

import { Expect, Equal } from "@total-typescript/helpers";
interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];


const usersWithIds: User[] = users.map((user, index) => ({
  ...user,
  id: index,
  age: 30,
}));


const userKeys = usersWithIds.map((user) => {
  const keys = Object.keys(user);

  type test = Expect<Equal<typeof keys, Array<"id" | "name">>>; // red squiggly line under Equal<>
  return keys;
});

const keys = Object.entries(user).forEach(([key, value]) => {
  // key is string, and value is any
});





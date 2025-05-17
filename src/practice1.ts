import { Expect,Equal } from "@total-typescript/helpers";
const array = [1, 2, 3];

const mightNotExist = array[3];
mightNotExist!.toExponential

type test = Expect<Equal<typeof mightNotExist, number | undefined>>;




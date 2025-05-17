import { Equal,Expect } from "@total-typescript/helpers"
import pngUrl1 from "./error.png"



type test = [
  Expect<Equal<typeof pngUrl1, string>>]


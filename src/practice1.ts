import { Expect,Equal } from "@total-typescript/helpers";
type Result<TResult,TError=Error> = {success:true, data:TResult} | {success:false,error:TError}

const createRandomNumber = () : Result<number> => {
    const num = Math.random();
    if (num>0.5) {
        return {
            success:true,
            data:num
        }
    } else {
        return {
            success:false,
            error:new Error("Something went wrong!")
        }
    }
}

const result= createRandomNumber();
if (result.success) {
    console.log(result.data);
    type test = Expect<Equal<typeof result.data, number>>;
} else {
    console.log(result.error);
    type test = Expect<Equal<typeof result.error, Error>>;
}
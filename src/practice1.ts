import { Logger } from "./test.ts";

const myApp = (logger:Logger)=>{
  logger.info("INFO")
  logger.log("LOG")
  logger.warn("WARN")
  logger.error("ERROR")
}
myApp(Logger);
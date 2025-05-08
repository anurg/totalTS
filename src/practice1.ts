interface Logger {
  log(message: string, level: number): void;
  a:string;
}

interface Logger {
  log(message: string): void;
  b:number;
}

const myLogger: Logger = {
  log: (message: string, level?: number) => {
    if (level !== undefined) {
      console.log(message, level);
    } else {
      console.log(message);
    }
  },
  a:"",
  b:2
};

myLogger.log(
  "My message",
  123
);

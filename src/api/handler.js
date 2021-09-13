const name = require("./modules")
const page = require("./page")
// const { readFileSync } = require("fs")
// const home = readFileSync("./src/api/v1/home-page.html")

// // const os = require("os")
// // console.log(
// //   os.userInfo(),
// //   os.uptime(),
// //   os.type(),
// //   os.release(),
// //   os.totalmem(),
// //   os.freemem()
// // )

// // const path = require("path")
// // console.log(path.sep)

// // const fs = require("fs")
// // fs.writeFileSync(
// //   "./src/api/v1/new-test.txt",
// //   `hello from new test 2, ${fs.readFileSync("./src/api/v1/test.txt")}`,
// //   { flag: "a" }
// // )

// //  ### NO NEED TO START A SERVER!! ###
// // const http = require("http")
// // const server = http.createServer((req, res) => {
// //   res.write("welcome on second server")
// //   res.end()
// // })
// // server.listen(port_number)

// export default function handler(req, res) {
//   // return <h1>Hello {name}</h1> React non funziona!!!

//   // if (req.url === "/") res.status(200).send(page)
//   // if (req.url === "/about") {
//   //   console.log("about...........")
//   //   res.status(200).json({ message: "token revoked" })
//   // }

//   // fs.readFile("./src/api/v1/test.txt", "utf8", (err, result) => {
//   //   if (err) {
//   //     console.log(err)
//   //     return
//   //   }
//   //   console.log(result)
//   //   console.log("complete reading")
//   // })
//   // console.log("start next task")

//   // const { readFile } = require("fs").promises
//   // /*   const util = require("util")
//   // const readFilePromise = util.promisify(readFile) */
//   // const start = async () => {
//   //   try {
//   //     /*       const text = await readFilePromise("./src/api/v1/test.txt", "utf8") */ const text =
//   //       await readFile("./src/api/v1/test.txt", "utf8")
//   //     console.log(text)
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }
//   // start()

//   /* EVENT EMITTER */
//   // const EventEmitter = require("events")
//   // const customEmitter = new EventEmitter()
//   // customEmitter.on("response", page => {
//   //   console.log("data", page)
//   // })
//   // customEmitter.emit("response", page)

//   /* STERAMS */
//   // const { createReadStream } = require("fs")
//   // const stream = createReadStream("./src/api/v1/test.txt", {
//   //   encoding: "utf-8",
//   // })
//   // stream.on("data", result => {
//   //   console.log(result)
//   // })
//   // stream.on("error", err => console.log(err))

//   // Cannot set headers after they are sent to the client (non sempre)
//   res.writeHead(200, { "content-type": "text/html" })

//   // res.status(200).send(home) scarica home
//   // res.status(200).write(home) visualizza home
//   // res.end()                   e finisce il task
//   res.status(200).end(home) //visualizza home e finisce il task
// }
const { loggerNOexpress } = require("./middleware/logger")

export default function handler(req, res) {
  loggerNOexpress(req, res)
  res.send("Home (no express style)")
}

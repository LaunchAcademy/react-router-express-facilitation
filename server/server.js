import path from "path"
import { fileURLToPath } from 'url'
import logger from "morgan"
import bodyParser from "body-parser"
import hbsMiddleware from "express-handlebars"
import fs from "fs"
import _ from "lodash"
import express from "express"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const barDataPath = path.join(__dirname, '../bars.json');

app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    // defaultLayout: "default",
    extname: ".hbs"
  })
)

 app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render("home")
})

app.get('/bars', (req, res) => {
  res.render("home")
})

app.get('/bars/:id', (req, res) => {
  res.render("home")
})

app.get('/api/v1/bars', (req, res) => {
  const bars = JSON.parse(fs.readFileSync(barDataPath));
  res.status(200).send(JSON.stringify(bars));
})

app.get('/api/v1/bars/:id', (req, res) => {
  const bars = JSON.parse(fs.readFileSync(barDataPath));
  let matchingBar = bars.find(bar => bar.id === parseInt(params.id))
  let barInfo = matchingBar || {};
  res.status(200).send(JSON.stringify(barInfo));
})

// app.get('*', (req, res) => {
//   res.render("home")
// })

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

export default app

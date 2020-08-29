import app from './src/app'
import chalk from 'chalk'

const port = process.env.PORT

app.listen(port)

console.log(chalk('this server is running at port: ' + port))
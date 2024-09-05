import { config } from 'dotenv'
config()
import express from 'express'

import databaseService from '~/services/database.services'
import usersRouter from '~/routes/users.routes'
import { defaultErrorHandlers } from '~/middlewares/error.middlewares'
databaseService.connect()
const app = express()
const port = 3000
app.use(express.json())
app.use('/users', usersRouter)
app.use(defaultErrorHandlers)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

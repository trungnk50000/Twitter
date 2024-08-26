import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    console.log('🚀 ~ registerController ~ result:', result)
    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    console.log('🚀 ~ registerController ~ error:', error)
    return res.status(400).json({
      message: 'Register failed',
      error
    })
  }
}

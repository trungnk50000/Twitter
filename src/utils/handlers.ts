import { Request, Response, NextFunction } from 'express'

export const wrapRequestHandler = (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next).catch(next))
    // try {
    //   func(req, res, next)
    // } catch (error) {
    //   next(error)
    // }
  }
}

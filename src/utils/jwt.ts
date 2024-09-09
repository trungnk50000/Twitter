import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
config()

export const signToken = ({
  payload,
  privateKey = process.env.JWT_SECRET as string,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  privateKey?: string
  options?: jwt.SignOptions
}) => {
  return new Promise((resolve, reject) =>
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) throw reject(error)
      return resolve(token)
    })
  )
}

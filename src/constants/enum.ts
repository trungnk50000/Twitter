export enum UserVerifyStatus {
  Unverified, // chưa xác minh email mặc định là 0
  VERIFIED, // đã xác thực email
  Banned // bị khóa
}

export enum TokenType {
  AcessToken,
  RefreshToken,
  ForgotPasswordToken,
  EmailVerifyToken
}

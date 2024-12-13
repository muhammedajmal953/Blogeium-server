import jwt from 'jsonwebtoken'

export  function createToken(payload:unknown){
    return  jwt.sign({payload},process.env.Jwt_Secret!,{expiresIn:'1d'})
}

export function verifyToken(token: string) {
    return jwt.verify(token,process.env.Jwt_Secret!)
}


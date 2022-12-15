import jwt from 'jsonwebtoken'

export const createAccessToken = (payload) => {
    console.log(process.env.ACCESS_TOKEN_SECRET)
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

export const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.JWT_EXPIRES_TIME})
}



// export const sendToken = (user, statusCode, res) => {

//     const token = user.getJwtToken();

//     const options = {
//         expires: new Date(
//             Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
//         ),
//         httpOnly: true
//     }


//     res.status(statusCode).cookie('token', token, options).json({
//         success: true,
//         token,
//         user
//     })

// }
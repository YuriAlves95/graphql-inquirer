export default {
  jwt: {
    secret: process.env.SECRET_KEY || '869c5fcfff23b5342a2241367bd761a1',
    expiresIn: '8h',
  }
}


const jwt = require('jsonwebtoken')
const utils = require('../../utils')

const APP_SECRET = utils["APP_SECRET"]

function getUserId(parent, args, context, info) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}


function user(parent, args, context, info) {

  const user = context.prisma.user({id: args.id})

  console.log(utils["APP_SECRET"])

  return user
}

function users(parent, args, context, info) {

  return context.prisma.users()
}

module.exports = {
  users,
  user,
  getUserId
}

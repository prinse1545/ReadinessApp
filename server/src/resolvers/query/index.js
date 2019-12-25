

const jwt = require('jsonwebtoken')
const utils = require('../../utils')

const APP_SECRET = utils["APP_SECRET"]


function getPlayerId(parent, args, context, info) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { playerId } = jwt.verify(token, APP_SECRET)
    return playerId
  }

  throw new Error('Not authenticated')
}


function player(parent, args, context, info) {

  const Authorization = context.request.get('Authorization')

  if(!Authorization) {
    throw new Error("Not Authenticated")
  }

  const player = context.prisma.player({id: args.id})

  console.log(utils["APP_SECRET"])

  return player
}

function players(parent, args, context, info) {
  const Authorization = context.request.get('Authorization')

  if(!Authorization) {
    throw new Error("Not Authenticated")
  }

  return context.prisma.players()
}

function days(parent, args, context, info) {
  return context.prisma.days()
}



module.exports = {
  players,
  player,
  getPlayerId,
  days,
}

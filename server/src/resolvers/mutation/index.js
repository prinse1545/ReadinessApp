const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getPlayerId } = require('../../utils')

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const player = await context.prisma.createPlayer({ ...args, password })

  // 3
  const token = jwt.sign({ playerId: player.id }, APP_SECRET)

  // 4
  return {
    token,
    player,
  }
}

async function login(parent, args, context, info) {
  // 1
  const player = await context.prisma.player({ email: args.email })
  if (!player) {
    throw new Error('No such player found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, player.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ playerId: player.id }, APP_SECRET)

  // 3
  return {
    token,
    player,
  }
}

async function createDay(parent, args, context, info) {
  const Authorization = context.request.get('Authorization')

  if(!Authorization) {
    throw new Error("Not Authenticated")
  }

  args.soreness = JSON.parse(JSON.stringify(args.soreness))
  const day = await context.prisma.createDay({
    playerId: args.playerId,
    hoursOfSleep: args.hoursOfSleep,
    sleepQuality: args.sleepQuality,
    trainingDay: args.trainingDay,
    fatigueLevel: args.fatigueLevel,
    soreness: {create: args.soreness},
    mentalStress: args.mentalStress
  })
  return day
}


module.exports = {
  signup,
  login,
  createDay
}

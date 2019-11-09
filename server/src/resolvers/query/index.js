
function user(parent, args, context, info) {

  return context.prisma.user({email: args.email})
}

function users(parent, args, context, info) {

  return context.prisma.users()
}

module.exports = {
  users,
  user
}

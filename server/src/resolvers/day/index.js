
function soreness(parent, args, context, info) {
  return context.prisma.day({id: parent.id}).soreness()
}

module.exports = {
  soreness
}

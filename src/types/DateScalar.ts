import { scalarType } from '@nexus/schema'

export const DateScalar = scalarType({
  name: 'DateTime',
  asNexusMethod: 'date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value)
  },
  serialize(value) {
    return value.getTime()
  },
  // parseLiteral(ast) {
  //   if (ast.kind === Kind.INT) {
  //     return new Date(ast.value)
  //   }
  //   return null
  // },
})
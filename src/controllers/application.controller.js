module.exports = {
  create: async (ctx) => {
    try {
      const { firstName, lastName, email, JobId } = ctx.request.body
      if (!firstName || !lastName || !email)
        ctx.throw(400, 'please provide all field firstName, lastName, email!')
      if (!JobId) ctx.throw(400, 'please provide JobId')

      const candidate = await ctx.db.Candidate.create({
        firstName,
        lastName,
        email,
      })
      ctx.body = await ctx.db.Application.create({
        JobId,
        CandidateId: candidate.id,
      })
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  find: async (ctx) => {
    try {
      ctx.body = await ctx.db.Company.findAll({})
    } catch (err) {
      ctx.throw(500, err)
    }
  },
}

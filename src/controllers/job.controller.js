module.exports = {
  create: async (ctx) => {
    try {
      const { title, CompanyId } = ctx.request.body
      if (!title) ctx.throw(400, 'please provide the title field')
      if (!CompanyId) ctx.throw(400, 'please provide the CompanyId')
      ctx.body = await ctx.db.Job.create({ title, CompanyId })
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  find: async (ctx) => {
    try {
      ctx.body = await ctx.db.Job.findAll({
        include: [
          {
            model: ctx.db.Candidate,
          },
        ],
      })
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  findOne: async (ctx) => {
    try {
      const job = await ctx.db.Job.findOne({
        where: { id: ctx.params.id },
      })
      if (!job) ctx.throw(404, 'job id is invalid ')
      ctx.body = job
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  deleteOne: async (ctx) => {
    try {
      const results = await ctx.db.Job.destroy({
        where: {
          id: ctx.params.id,
        },
      })

      // eslint-disable-next-line no-unused-expressions
      results === 0
        ? ctx.throw(400, 'invalid id provided')
        : (ctx.body = `Job is deleted with id ${ctx.params.id}`)
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  updateOne: async (ctx) => {
    try {
      const results = await ctx.db.Job.update(
        {
          name: ctx.request.body.name,
          city: ctx.request.body.city,
          address: ctx.request.body.address,
        },
        {
          where: {
            id: ctx.params.id,
          },
        }
      )
      // eslint-disable-next-line no-unused-expressions
      results === 0
        ? ctx.throw(400, 'invalid id provided')
        : (ctx.body = `Job is updated with id ${ctx.params.id}`)
    } catch (err) {
      ctx.throw(500, err)
    }
  },
}

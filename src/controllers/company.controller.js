module.exports = {
  create: async (ctx) => {
    try {
      const { name, city, address } = ctx.request.body
      ctx.body = await ctx.db.Company.create({
        name,
        city,
        address,
        UserId: ctx.state.user,
      })
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  find: async (ctx) => {
    try {
      ctx.body = await ctx.db.Company.findAll({
        where: {
          UserId: ctx.state.user,
        },
        include: [
          {
            model: ctx.db.Job,
          },
        ],
      })
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  findOne: async (ctx) => {
    try {
      const company = await ctx.db.Company.findOne({
        where: { id: ctx.params.id },
      })
      if (!company) ctx.throw(404, 'company id is invalid ')
      ctx.body = company
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  deleteOne: async (ctx) => {
    try {
      const results = await ctx.db.Company.destroy({
        where: {
          id: ctx.params.id,
        },
      })

      // eslint-disable-next-line no-unused-expressions
      results === 0
        ? ctx.throw(400, 'invalid id provided')
        : (ctx.body = `Company is deleted with id ${ctx.params.id}`)
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  updateOne: async (ctx) => {
    try {
      const results = await ctx.db.Company.update(
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
        : (ctx.body = `Company is updated with id ${ctx.params.id}`)
    } catch (err) {
      ctx.throw(500, err)
    }
  },
}

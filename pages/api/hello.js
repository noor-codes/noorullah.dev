// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Name = (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Noorullah Ahmadzai' })
}

export default Name

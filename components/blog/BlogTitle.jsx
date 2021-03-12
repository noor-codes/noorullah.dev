const BlogTitle = ({ title, description }) => (
  <>
    <div className="mt-8 mb-4 px-8">
      <h1 className="font-bold leading-normal text-2xl tracking-tight xs:font-bold xs:text-3xl xs:leading-10 md:text-4xl lg:mb-6 lg:pr-36 lg:leading-snug lg:text-5xl">
        {title}
      </h1>
    </div>
    <p className="px-8 text-sm xs:text-base xs:tracking-tight md:text-lg lg:pr-36 lg:text-xl">
      {description}
    </p>
  </>
)

export default BlogTitle

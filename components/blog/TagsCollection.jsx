const TagsCollection = () => (
  <div className="font-sans mt-5 lg:mb-8">
    <div className="flex flex-wrap gap-2 ml-8 mr-10 text-center">
      {['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'NodeJS', 'MongoDB', 'Firebase'].map(
        (name) => (
          <div
            key={name}
            className="bg-gray-100 flex-1 text-gray-500 text-tiny  px-3 py-1.5 md:text-bigger rounded-sm"
          >
            {name}
          </div>
        )
      )}
    </div>
  </div>
)

export default TagsCollection

const UserInfo = ({ name, views, readtime, date }) => (
  <div className="flex items-center font-sans ml-8 mr-10">
    <img
      className="rounded-full h-14 w-14 mr-3 xs:h-16 xs:w-16 md:h-20 md:w-20"
      src="/img/profile.jpg"
      alt="Noorullah Ahmadzai"
    />
    <div>
      <h2 className="text-base font-semibold text-gray-600 tacking-wide xs:text-lg">{name}</h2>
      <p className="flex flex-wrap text-xs mt-0.5 text-gray-500 xs:text-sm">
        <span>{readtime} mins read&nbsp; - &nbsp; </span> <span> {views} views - &nbsp;</span>
        <span>{date}</span>
      </p>
    </div>
  </div>
)

export default UserInfo

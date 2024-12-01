import Image from 'next/image'

type IconCardProps = {
  name: string
  icon: string
}

export const IconCard = ({ name, icon }: IconCardProps) => {
  return (
    <div>
      <div className="flex justify-center m-3 items-center bg-gray-100 h-24 w-24 sm:h-28 sm:w-28 text-2xl text-gray-600 rounded-md -mb-0.5">
        <div className="relative h-14 w-14 sm:h-16 sm:w-16">
          <Image
            src={icon}
            alt={`${name} icon`}
            fill
            className="object-contain text-gray-600 [filter:invert(45%)_sepia(7%)_saturate(629%)_hue-rotate(182deg)_brightness(93%)_contrast(89%)] hover:[filter:none] transition-all duration-300"
            sizes="(max-width: 640px) 56px, 64px"
          />
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-2">{name}</div>
    </div>
  )
}

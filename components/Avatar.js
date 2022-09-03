import Image from 'next/image'
function Avatar({url, className}) {
  return (
      <Image
          className={`${className} h-150 rounded-full cursor-pointer transition-duration-150 transform hover:scale-110`}
          loading="lazy"
          src={url}
          width={25}
          height={25}
          alt="profile pic"
              />
  )
}

export default Avatar
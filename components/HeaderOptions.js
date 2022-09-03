import React from 'react'
import HeaderOption from './HeaderOption'
import {DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from '@heroicons/react/outline'

function HeaderOptions() {
  return (
      <div className='flex w-full text-gray-700 justify-evenly text-sm 
      lg:text-base lg:justfy-start lg:space-36 lg:pr-52 border-b-[1px]'>
          {/* left section*/}
          <div className='flex space-x-6'>
              <HeaderOption Icon={ SearchIcon} title="All" selected />
              <HeaderOption Icon={ PhotographIcon} title="Images" />
              <HeaderOption Icon={ PlayIcon} title="Videos" />
              <HeaderOption Icon={ NewspaperIcon} title="News"   />
              <HeaderOption Icon={ MapIcon} title="Maps"   />
              <HeaderOption Icon={DotsVerticalIcon } title="More"   />

            </div>

          {/* left section*/}
          <div className='flex space-x-4'>
              <p className='link'>Settings</p>
              <p className='link'>Tools</p>
          </div>

    </div>
  )
}

export default HeaderOptions
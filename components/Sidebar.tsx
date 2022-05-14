import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  HomeIcon,
  MailIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  UserIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import { signOut, signIn, useSession } from 'next-auth/react'

function Sidebar() {
    const {data: session} = useSession()
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt="logo"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} onClick={session ? signOut : signIn} title={session ? 'Sign Out' : 'Sign In'} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar

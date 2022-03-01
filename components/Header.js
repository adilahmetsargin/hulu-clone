/* eslint-disable jsx-a11y/alt-text */
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'

import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
    const router = useRouter()

    return (
        <header className="flex flex-col 
        sm:flex-row m-5 
     
        items-center h-auto">
               <div className="flex flex-grow justify-evenly max-w-2xl">
                   <HeaderItem title='HOME' Icon={HomeIcon} />   
           
               </div>
        </header>
    )
}

export default Header

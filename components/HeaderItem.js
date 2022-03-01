/* eslint-disable @next/next/no-html-link-for-pages */
function HeaderItem({ Icon, title }) {

    return (
        <div className="flex flex-col items-center 
        cursor-pointer group w-12 sm:w-20 hover:text-white">
            <a href="/">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            </a>
            <p className="opacity-0 
            group-hover:opacity-100
            tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem

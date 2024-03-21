import { Spinner } from '@/components/ui/icon-spinner'
import {
    HomeIcon,
    ShoppingBagIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import { FunctionComponent, ReactNode, Suspense } from 'react'
import { NavLink, Outlet, To } from 'react-router-dom'

const Root: FunctionComponent = () => {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 flex-none p-4 text-white space-y-4">
                <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-semibold">Dings Days</h1>
                </div>
                <nav className="space-y-2">
                    <SidebarItem to="." icon={<HomeIcon />}>
                        Home
                    </SidebarItem>
                    <SidebarItem to="order" icon={<ShoppingBagIcon />}>
                        Order Coffee
                    </SidebarItem>
                    <SidebarItem to="login" icon={<UserIcon />}>
                        Login
                    </SidebarItem>
                </nav>
            </aside>
            <main className="flex-1 overflow-auto p-4 bg-white rounded-2xl my-4 mr-4">
                <div className="max-w-2xl mx-auto my-10">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        </div>
    )
}

export default Root

const SidebarItem: FunctionComponent<{
    to: To
    icon?: ReactNode
    children: ReactNode
}> = ({ to, children, icon }) => {
    return (
        <NavLink
            to={to}
            className="p-2 hover:bg-indigo-800 cursor-pointer rounded-lg flex items-center space-x-2 text-indigo-100 hover:text-white aria-[current=page]:bg-white aria-[current=page]:text-indigo-800 transition-colors"
        >
            <div className="size-6">{icon}</div>
            <span>{children}</span>
        </NavLink>
    )
}

const Loading: FunctionComponent = () => {
    return (
        <div role="status" className="flex justify-center items-center h-full">
            <Spinner />
            <span className="sr-only">Loading...</span>
        </div>
    )
}

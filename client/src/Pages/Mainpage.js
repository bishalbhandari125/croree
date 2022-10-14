import React from 'react'
import Politicianlistformain from '../Components/MainpageComp/Politicianlistformain'
import Trends from '../Components/MainpageComp/Trends'
import Sidebar from '../Components/Sidebar'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Logo from '../Assets/logo.png'
import { XMarkIcon , Bars3Icon } from '@heroicons/react/24/outline'
import {FaSearch,FaHome,FaPlus,FaPoll} from 'react-icons/fa'
import {MdNotificationsNone} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const user = {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const setting = {
    name: 'Setting',
    href: '#',
    icon: FiSettings
}


const navigation = [
    { name: 'Search', href: '#', icon: FaSearch  },
    { name: 'Home', href: '#', icon: FaHome },
    { name: 'Post', href: '#', icon: FaPlus },
    { name: 'Surveys', href: '#', icon: FaPoll },
    { name: 'Notification', href: '#', icon: MdNotificationsNone },

]


const Mainpage = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <div className="flex h-screen">
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-4">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="pt-5 pb-4">
                                        <div className="flex flex-shrink-0 items-center px-4">
                                            <img
                                                className="h-8 w-auto"
                                                src="../Assets/logo.png"
                                                alt="Yopali"
                                            />
                                        </div>
                                        <nav aria-label="Sidebar" className="mt-5">
                                            <div className="space-y-1 px-2">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                    >
                                                        <item.icon
                                                            className="flex flex-col mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </Link>
                                                ))}
                                                <Link
                                                    key={setting.name}
                                                    to={setting.href}
                                                    className="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                >
                                                    <setting.icon
                                                        className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                    {setting.name}
                                                </Link>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="flex flex-shrink-0 border-t border-gray-200 p-4 hover:bg-blue-300">
                                        <Link to="\mainpage" className="group block flex-shrink-0">
                                            <div className="flex items-center">
                                                <div>
                                                    <img className="inline-block h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{user.name}</p>
                                                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                                        Account Settings
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="flex w-28 flex-col">
                        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-[#408BB6]">
                            <div className="flex-1">
                                <div className="flex items-center justify-center bg-[#408BB6] py-4">
                                    <img
                                        className="h-8 w-auto"
                                        src={Logo}
                                        alt="Yopali"
                                    />
                                </div>
                                <nav aria-label="Sidebar" className="flex flex-col items-center space-y-2 py-2">
                                    {navigation.map((item) => (
                                        
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="flex items-center rounded-lg p-2 text-indigo-200 hover:bg-indigo-700"
                                        >
                                        <div className='flex flex-col items-center'>
                                            <item.icon className="h-6 w-6 -mb-5" aria-hidden="true" /><br/>
                                            <h1 className="text-md font-semibold">{item.name}</h1>
                                        </div>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 pb-5">
                                <Link href="#" className="w-full flex-shrink-0">
                                    <img className="mx-auto block h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    <div className="sr-only">
                                        <p>{user.name}</p>
                                        <p>Account settings</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                    {/* Mobile top navigation */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between bg-[#408BB6] py-2 px-4 sm:px-6 lg:px-8">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src={Logo}
                                    alt="Yopali"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#408BB6] text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
             

                <main className="flex flex-1 overflow-hidden">
                    {/* Primary column  */}
                    <section
                        aria-labelledby="primary-heading"
                        className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
                    >
                        

                        {children}
                        {/* Your content  */}
                       
                        
                    </section>

                    {/* LAST column (hidden on smaller screens)  */}
                    <aside className="hidden lg:order-last lg:block lg:flex-shrink-0">
                        <div className="relative flex h-full w-44 flex-col overflow-y-auto border-r border-gray-200 bg-[#408BB6]">
                            {/* Your content  */}
                            <div className='flex flex-col w-auto'>
                                <div className='h-auto w-full  space-y-6 mt-5'>
                                </div>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
        </>
    )
}

export default Mainpage
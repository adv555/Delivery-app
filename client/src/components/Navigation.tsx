import React from 'react'
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { AppRoute } from '../common/app/app-route.enum'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { Typography } from './Typography'
import { CartLink } from './CartLink'

const user = {
  name: 'Tom Cook',
  // email: "tom@example.com",
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { link: 'Shop', to: AppRoute.SHOP, current: true },
  { link: 'Sopping Cart', to: AppRoute.CART, current: false },
  { link: 'History', to: AppRoute.HISTORY, current: false },
  { link: 'Coupons', to: AppRoute.COUPONS, current: false },
]
const userNavigation = [
  { link: 'Your Profile', to: AppRoute.HISTORY },
  { link: 'Sign out', to: AppRoute.SIGN_OUT },
]

export const Navigation: React.FC = () => {
  return (
    <Disclosure
      as="nav"
      className=" bg-orange-light shadow-header text-orange-dark sticky top-0 z-10"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NavLink to={AppRoute.SHOP}>
                    <Logo />
                  </NavLink>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map(({ link, to }) => (
                      <NavLink
                        key={link}
                        to={to}
                        className={({ isActive }) =>
                          [
                            isActive
                              ? 'text-orange-accent font-bold'
                              : 'text-orange-dark font-medium hover:text-orange-accent',
                          ]
                            .filter(Boolean)
                            .join(' ')
                        }
                      >
                        <Typography type={'Ag-16-regular'} children={link} />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <CartLink type="link" />

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs outline bg-orange-dark rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-accent focus:ring-orange-accent hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-orange-accent hover:ring-orange-accent">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map(({ link, to }) => (
                          <NavLink
                            key={link}
                            to={to}
                            className={({ isActive }) =>
                              [
                                'block px-4 py-2 text-sm text-gray-400',
                                isActive
                                  ? 'bg-gray-300 text-orange-light font-bold'
                                  : 'text-orange-dark hover:bg-orange-accent hover:text-orange-light',
                              ]
                                .filter(Boolean)
                                .join(' ')
                            }
                          >
                            <Typography type={'Ag-16-regular'} children={link} />
                          </NavLink>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-orange-dark inline-flex items-center justify-center p-2 rounded-md text-orange-light hover:text-orange-dark hover:bg-orange-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-accent focus:ring-orange-accent focus:text-orange-accent">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map(({ link, to }) => (
                <NavLink
                  key={link}
                  to={to}
                  className={({ isActive }) =>
                    [
                      'block px-3 py-2 rounded-md text-base font-medium',
                      isActive
                        ? 'bg-orange-accent text-orange-light font-bold'
                        : 'text-orange-dark hover:bg-orange-accent hover:text-orange-light',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  }
                >
                  <Typography type={'Ag-16-regular'} children={link} />
                </NavLink>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-orange-dark">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full text-gray-300 outline"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-gray-300">
                    {user.name}
                  </div>
                </div>
                <CartLink type={'button'} />
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map(({ link, to }) => (
                  <Disclosure.Button
                    key={link}
                    as="a"
                    href={to}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {link}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

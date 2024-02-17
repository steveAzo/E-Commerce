import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Filterr For Products', href: '#', current: true },
  {
    name: 'Size',
    current: false,
    children: [
      { name: 'Add to WishList', href: '#' },
      { name: 'Ending Soon', href: '#' },
      { name: 'New Arrivals', href: '#' },
    ],
  },
  {
    name: 'Sort By',
    current: false,
    children: [
      { name: 'Price Low to High', href: '#' },
      { name: 'Price High to Low', href: '#' },
      { name: 'Rating High to Low', href: '#' },
    
    ],
  },
  { name: 'Discount', href: '#', current: false },
  { name: 'Collection', href: '#', current: false },
  { name: 'Currency', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBar1() {
  return (
    <div className="flex grow flex-col gap-y-5 min-h-screen overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name} className='mb-2'>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'block rounded-md py-2 pr-2 pl-10 text-lg leading-6 font-semibold text-gray-700 mb-4'
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-lg leading-6 font-semibold text-gray-700'
                            )}
                          >
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

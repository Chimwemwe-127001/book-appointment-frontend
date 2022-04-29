import React from 'react';
import logo from '../assets/images/logo.png'
const navigation = [
  { name: 'Doctors', href: '#', current: true },
  { name: 'Reserve', href: '#', current: false },
  { name: 'My reservations', href: '#', current: false },
  { name: 'Add doctor', href: '#', current: false },
  { name: 'Delete Doctor', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SideBar = () => (
  <div className="flex flex-col w-64">
    <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <a href="/"><img src={logo} className="w-40" alt="logo"/></a>
        </div>
        <nav className="mt-5 flex-1" aria-label="Sidebar">
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          <hr className="border-t border-gray-200 my-5" aria-hidden="true" />
        </nav>
      </div>
    </div>
  </div>
);

export default SideBar;

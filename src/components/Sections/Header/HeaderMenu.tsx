import { getBasicData } from '@/src/api/basicData';
import Link from 'next/link';
import React from 'react';

export default async function Header() {
  const data = await getBasicData();

  if (!data) {
    return null;
  }
  
  const { main_menu, main_header } = data;
  const leftMenu = main_menu.slice(0, 3);
  const rightMenu = main_menu.slice(3);

  return (
    <>
      <nav className="py-5 my-5 flex justify-beetwen">
        <ul className="flex justify-around items-center flex-grow">
          {leftMenu?.map((menuItem, index) => (
            <React.Fragment key={menuItem.id}>
              <li className="content-center text-gray-500">
                <Link href={menuItem.href} className="uppercase">
                  {menuItem.title}
                </Link>
              </li>
              {index !== leftMenu.length - 1 && (
                <span className="w-px h-6 bg-gray-300 inline-block align-middle" />
              )}
            </React.Fragment>
          ))}
        </ul>

        <div className="text-center mx-14">
          <li className="list-none text-5xl text-gray-600">{main_header.title}</li>
          <p
            style={{
              fontFamily: 'var(--marckScript-font)',
              fontSize: '20px',
              color: 'gray',
            }}
          >
            {main_header.tagline}
          </p>
        </div>

        <ul className="flex justify-around items-center flex-grow">
          {rightMenu?.map((menuItem, index) => (
            <React.Fragment key={menuItem.id}>
              <li className="content-center text-gray-500">
                <Link href={menuItem.href} className="uppercase">
                  {menuItem.title}
                </Link>
              </li>
              {index !== rightMenu.length - 1 && (
                <span className="w-px h-6 bg-gray-300 inline-block align-middle" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
}

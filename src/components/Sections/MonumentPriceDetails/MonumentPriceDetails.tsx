import React from 'react';
import Htag from '../../UI/Htag/Htag';
import data from '@/src/data.json';
import Button from '../../UI/Button/Button';

export default function MonumentPriceDetails() {
  const monumentData = data;

  return (
    <div>
      <Htag tag="h2">Гранитный памятник под ключ</Htag>
      <div className="flex w-full">
        <ul className="flex flex-col">
          {monumentData.components.map((component, index) => (
            <li key={index}>
              <Htag tag="h4">{component}</Htag>
            </li>
          ))}
        </ul>
        <div className="flex flex-col ml-8">
          <div className="flex ">
            {monumentData.products.map((product) => {
              return (
                <div
                  key={product.id}
                  className={`flex flex-col relative  ${
                    product.id === 3 ? 'border-r border-gray-300' : ''
                  }`}
                >
                  <span className="absolute inset-0 h-full w-px bg-gray-300"></span>
                  <ul key={product.id} className="px-3">
                    {product.dimensions.map((dimension) => (
                      <li
                        key={`${dimension.width} x ${dimension.height} x ${dimension.depth}`}
                        className="leading-9 text-light-gray-font"
                      >{`${dimension.width} x ${dimension.height} x ${dimension.depth}`}</li>
                    ))}
                  </ul>

                  {product.price && (
                    <Button color="primary" className="py-2 text-base">
                      {`${product.price} ₽`}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

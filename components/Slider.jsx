import React from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const Responsive = {
    0: {
        items: 1.5,
        margint:5
    },

    768: {
        items: 2.5,
        margin:10
    },

    1024: {
        items: 3.5,
        margin:20
    }

}

export default function Prensa (){
  return (

    <div className='bg-white'>
    <OwlCarousel className='owl-theme' responsive={Responsive} nav={true} loop margin={10} dotsEach={true} autoplay={true}>


        <div className='item rounded-lg'>


        <div className="flex-shrink-0 rounded-lg">
                  <img className="h-48 w-full object-cover" src="/agenda.jpg" alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-secondary p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black">
                      <a href="texto" className="hover:underline">
                        Texto
                      </a>
                    </p>
                    
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-black">Titulo</p>
                      <p className="mt-3 text-base text-black">Descripcion</p>
                    </a>
                    
                  </div>
                  <div className="mt-6 flex items-center">
                  <button
        type="button"
        className="inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Leer más
      </button>
                
                  </div>
                </div>
                </div>



                <div className='item rounded-lg'>


<div className="flex-shrink-0 rounded-lg">
          <img className="h-48 w-full object-cover" src="/albert.jpeg" alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-secondary p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-black">
              <a href="texto" className="hover:underline">
                Texto
              </a>
            </p>
            
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-black">Titulo</p>
              <p className="mt-3 text-base text-black">Descripcion</p>
            </a>
            
          </div>
          <div className="mt-6 flex items-center">
          <button
type="button"
className="inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Leer más
</button>
        
          </div>
        </div>
        </div>

        <div className='item rounded-lg'>


<div className="flex-shrink-0 rounded-lg">
          <img className="h-48 w-full object-cover" src="/asuncion.jpeg" alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-secondary p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-black">
              <a href="texto" className="hover:underline">
                Texto
              </a>
            </p>
            
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-black">Titulo</p>
              <p className="mt-3 text-base text-black">Descripcion</p>
            </a>
            
          </div>
          <div className="mt-6 flex items-center">
          <button
type="button"
className="inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Leer más
</button>
        
          </div>
        </div>
        </div>


        <div className='item rounded-lg'>


<div className="flex-shrink-0 rounded-lg">
          <img className="h-48 w-full object-cover" src="/bosque.jpeg" alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-secondary p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-black">
              <a href="texto" className="hover:underline">
                Texto
              </a>
            </p>
            
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-black">Titulo</p>
              <p className="mt-3 text-base text-black">Descripcion</p>
            </a>
            
          </div>
          <div className="mt-6 flex items-center">
          <button
type="button"
className="inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Leer más
</button>
        
          </div>
        </div>
        </div>

        <div className='item rounded-lg'>


<div className="flex-shrink-0 rounded-lg">
          <img className="h-48 w-full object-cover" src="/agenda.jpg" alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-secondary p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-black">
              <a href="texto" className="hover:underline">
                Texto
              </a>
            </p>
            
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-black">Titulo</p>
              <p className="mt-3 text-base text-black">Descripcion</p>
            </a>
            
          </div>
          <div className="mt-6 flex items-center">
          <button
type="button"
className="inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Leer más
</button>
        
          </div>
        </div>
        </div>
                </OwlCarousel>
                </div>
     

        
  )
  

  }

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <div className="relative bg-gray-800 bg-white mb-12">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="bosque.jpeg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-black">Banner</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Estamos para ayudarte</p>
          <p className="mt-3 text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          
        
        </div>
      </div>
    </div>
  )
}

export default function Buttons() {
    return (
      <div className="bg-white">
        <div className="text-7xl text-bold text-center pt-24 font-bold text-primary"> Servicios </div>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-lg font-semibold text-black">
            Nuestros servicios.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 ">


            <a href="https://www.google.com">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8 hover:-translate-y-2 ease-in duration-100">

              <img
                className="max-h-12"
                src="https://cdn-icons-png.flaticon.com/512/4801/4801092.png"
                alt="Workcation"
              />
             
             <div className="text-xl text-black mt-4 ml-5"> Llamada SOS</div>
            </div>
            </a>

            <a href="https://www.google.com">

            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8 hover:-translate-y-2 ease-in duration-100">
              <img className="max-h-12" src="https://cdn-icons-png.flaticon.com/512/3596/3596146.png" alt="Mirage" />
              <div className="text-xl text-black mt-4 ml-5">Licencia Nacional de conducir</div>

            </div>
            </a>

            <a href="https://www.google.com">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8 hover:-translate-y-2 ease-in duration-100">
              <img className="max-h-12" src="https://cdn-icons-png.flaticon.com/512/925/925127.png" alt="Tuple" />
              <div className="text-xl text-black mt-4 ml-5">Asistencia al vecino</div>

            </div>
            </a>

            <a href="https://www.google.com">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8 hover:-translate-y-2 ease-in duration-100">
              <img className="max-h-12" src="https://cdn-icons-png.flaticon.com/512/2334/2334248.png" alt="Laravel" />
              <div className="text-xl text-black mt-4 ml-5">Recolección de residuos</div>
            </div>
            </a>

            <a href="https://www.google.com">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8 hover:-translate-y-2 ease-in duration-100">
              <img
                className="max-h-12"
                src="https://cdn-icons-png.flaticon.com/512/1786/1786971.png"
                alt="StaticKit"
              />
                           
             <div className="text-xl text-black mt-4 ml-5">Emprendedores</div>

            </div>
            </a>

            <a href="https://www.google.com">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8 hover:-translate-y-2 ease-in duration-100">
              <img
                className="max-h-12"
                src="https://cdn-icons-png.flaticon.com/512/3561/3561764.png"
                alt="Statamic"
              />
             <div className="text-xl text-black mt-4 ml-5">Carnet Sanitario</div>

            </div>
            </a>

          </div>
        </div>
      </div>
    )
  }
  
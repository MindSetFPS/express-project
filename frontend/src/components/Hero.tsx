import Image from '../assets/banner.png'
import { Button, Badge } from 'flowbite-react'

export default function Preview() {
    return (
        <section
            className="flex w-full items-start justify-center bg-cover bg-center bg-no-repeat md:bg-[url('https://tailframes.com/images/squares-bg.webp')]"
        >
            <div
                className="m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 pt-12 md:gap-12 md:pt-20 px-3 sm:px-8 lg:px-16 xl:px-32"
            >
                <div className="flex flex-1 flex-col items-center gap-6 text-center">
                    <Badge size="large" variant="secondary">
                        Beta Abierta v1.0
                    </Badge>
                    <div className="flex max-w-lg flex-col gap-6">
                        <h1 className="
                            bg-gradient-to-r from-[#ff0f7b] to-[#f89b29]
                            inline-block text-transparent bg-clip-text
                            logo text-9xl font-bold text-slate-950 md:text-9xl">
                            mefit
                        </h1>
                        <p className="text-3xl font-normal leading-7 text-slate-500">
                            Cambia tu armario todos los días.
                            <br />
                            <span className="
                                bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 
                                text-3xl font-bold inline-block text-transparent bg-clip-text">
                                Sostenible y ético.
                            </span>
                        </p>

                    </div>
                    <div className='flex gap-4'>
                        <Button pill >
                            Crear una cuenta
                        </Button>
                        <Button pill outline>
                            Ir a la tienda
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
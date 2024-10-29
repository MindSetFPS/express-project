import React, { ReactNode } from "react"

export default function Features() {

    let photos = [
        'http://192.168.1.140:5173/src/assets/cards/dresses.png',
        'http://192.168.1.140:5173/src/assets/cards/jeans.png',
        'http://192.168.1.140:5173/src/assets/cards/sueters.png',
        'http://192.168.1.140:5173/src/assets/cards/trending.png',
        'http://192.168.1.140:5173/src/assets/cards/tshirts.png'
    ]

    return (
        <div className="container mx-auto px-4 md:px-36 my-20">
            <SectionPoint
                title={"Un lugar para los amantes de la ropa"}
                subtitle="Explora diferentes categorías, tamaños, estilos y más."
            >
                <div className="flex overflow-auto">
                    {
                        photos.map((photo) => {
                            return <img src={photo} alt="" className="mr-8" />
                        })
                    }
                </div>
            </SectionPoint>
            <SectionPoint
                image="http://192.168.1.140:5173/src/assets/1.png"
                title={"Digitaliza tu armario"}
                subtitle="No vuelvas a olvidar lo que tienes en tu armario. Digitaliza tu ropa con una sola foto y toma el control de tus outfits."
            >
                <img alt="" />
            </SectionPoint>
            <SectionPoint
                image="http://192.168.1.140:5173/src/assets/2.png"
                title={"Planea cada outfit"}
                subtitle="Nunca repitas outfits. Usa el calendario para planear que ponerte cada día."
            />
            <SectionPoint
                image="http://192.168.1.140:5173/src/assets/3.png"
                title={"Si no lo usas ¡Vendelo!."}
                subtitle="La ropa merece tener una segunda vida.Vende cualquier prenda de tu armario en segundos."
            />
            <SectionPoint
                image="http://192.168.1.140:5173/src/assets/4.png"
                title={"Expertas en moda te esperan."}
                subtitle="Profesionales de la moda y la belleza te ayudarán a explorar un nuevo estilo para para una ocasión especial, o simplemente para salir de la rutina."
            />
            <SectionPoint
                image="http://192.168.1.140:5173/src/assets/5.png"
                title="Pruebate ropa en segundos."
                subtitle="¿Dudaste si comprar alguna prenda por no saber si se ajusta a ti? Descubre como te quedará ese increíble vestido en instantes desde la aplicacióñ con una sola foto."
            />
            <SectionPoint
                image="http://192.168.1.140:5173/src/assets/1.png"
                title="Prueba mefit hoy."
                subtitle="Y vive la moda como nunca lo habías hecho."
            />

        </div>
    )
}

interface props {
    children?: ReactNode,
    title?: string,
    subtitle?: string;
    image?: 'string'
}

const SectionPoint: React.FC<props> = ({ title, subtitle, image, children }) => {
    return (
        <div className="flex md:flex-row flex-col items-center my-24">
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-2xl" >{subtitle}</p>
            </div>
            {image ? <img className="w-auto h-64" src={image} alt="" /> : null}
            {children}
        </div>
    )
}
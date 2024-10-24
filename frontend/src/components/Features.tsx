import { Heading, Section, Container, Flex, Box, Text } from "@radix-ui/themes"
import React, { ReactNode } from "react"

export default function Features() {
    return (
        <Flex mt="9" direction="column" gap="9" >
            <SectionPoint 
                title={"Un lugar para los amantes de la ropa"} 
                subtitle="Explora diferentes categorías, tamaños, estilos y más."
            />
            <SectionPoint 
                title={"Digitaliza tu armario"} 
                subtitle="No vuelvas a olvidar lo que tienes en tu armario. Digitaliza tu ropa con una sola foto y toma el control de tus outfits."
            />
            <SectionPoint 
                title={"Planea cada outfit"} 
                subtitle="Nunca repitas outfits. Usa el calendario para planear que ponerte cada día."
            />
            <SectionPoint 
                title={"Si no lo usas ¡Vendelo!."} 
                subtitle="La ropa merece tener una segunda vida.Vende cualquier prenda de tu armario en segundos."
            />
            <SectionPoint 
                title={"Expertas en moda te esperan."} 
                subtitle="Profesionales de la moda y la belleza te ayudarán a explorar un nuevo estilo para para una ocasión especial, o simplemente para salir de la rutina."
            />
            <SectionPoint
                title="Pruebate ropa en segundos." 
                subtitle="¿Dudaste si comprar alguna prenda por no saber si se ajusta a ti? <br /> Descubre como te quedará ese increíble vestido en instantes desde la aplicacióñ con una sola foto."
            />
            <SectionPoint 
                title="Prueba mefit hoy."
                subtitle="Y vive la moda como nunca lo habías hecho."
            />

        </Flex>
    )
}

interface props {
    child?: ReactNode,
    title?: string,
    subtitle?: string;
}

const SectionPoint: React.FC<props> = ({ title, subtitle, child }) => {
    return(
        <Container style={{ marginTop: "150px", marginBottom: "150px"}} >
            <Heading size="8" >{title}</Heading>
            <Text size="6" >{subtitle}</Text>

            {child}
        </Container>
    )
}
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import StylistItem from '@/components/stylists/StylistItem';
import { Heading } from '@/components/ui/heading';

const stylists = [
    {
        id: 1,
        name: 'Ana Martínez',
        profileImage: 'https://picsum.photos/seed/1/200',
        message: 'Hola, soy Ana. ¿Qué necesitas para mejorar tu estilo?',
        highlights: ["8 prendas", "1 Consulta de estilo en vivo", "7 días de consulta de estilo por chat"],
        description: `En esta guía, crearé diez atuendos únicos y a medida, diseñados para satisfacer tus necesidades individuales de estilo.

Ya sea que busques elevar tu guardarropa actual, prepararte para la próxima temporada o probar algo completamente nuevo, puedo ayudarte.
Cada atuendo será cuidadosamente diseñado y curado por mí, una estilista personal calificada, teniendo en cuenta las últimas tendencias de moda, tus preferencias personales y tus solicitudes específicas.

Recomiendo combinar esto con un análisis de personalidad de estilo y/o una consulta de color. Estas herramientas ayudarán a crear una imagen más completa de tu estilo y me permitirán personalizar todo un poco mejor. Sin embargo, también puedo crear fácilmente algunos atuendos para ti sin necesidad de estas.

¡Espero con entusiasmo ayudarte a definir tu estilo!`,
        responses: [
            '¿Te gustaría un look casual o algo más formal?',
            '¿Buscas un outfit específico para un evento?',
        ],
    },
    {
        id: 2,
        name: 'Luis García',
        profileImage: 'https://picsum.photos/seed/2/200',
        message: 'Hola, soy Luis. ¿Cómo puedo asistirte hoy?',
        responses: [
            '¿Prefieres colores neutros o algo más llamativo?',
            '¿Qué tipo de prendas sueles usar?',
        ],
    },
    {
        id: 3,
        name: 'Marta López',
        profileImage: 'https://picsum.photos/seed/3/200',
        message: '¡Hola! Soy Marta. ¿Buscas algo en particular?',
        responses: [
            '¿Te interesa ropa para un clima específico?',
            '¿Buscas algo de temporada o algo clásico?',
        ],
    },
    {
        id: 4,
        name: 'Carlos Pérez',
        profileImage: 'https://picsum.photos/seed/4/200',
        message: 'Hola, soy Carlos. ¿Qué necesitas en tu armario?',
        responses: [
            '¿Te gustan los estilos minimalistas?',
            '¿Tienes una ocasión especial en mente?',
        ],
    },
    {
        id: 5,
        name: 'Laura Sánchez',
        profileImage: 'https://picsum.photos/seed/5/200',
        message: '¡Hola! Soy Laura. Estoy aquí para ayudarte.',
        responses: [
            '¿Prefieres prendas modernas o clásicas?',
            '¿Cuál es tu estilo favorito?',
        ],
    },
    {
        id: 6,
        name: 'Pedro Gómez',
        profileImage: 'https://picsum.photos/seed/6/200',
        message: '¡Hola! Soy Pedro. ¿En qué puedo asistirte?',
        responses: [
            '¿Buscas ropa para una ocasión casual?',
            '¿Te gustaría explorar nuevas tendencias?',
        ],
    },
    {
        id: 7,
        name: 'Sofía Ramírez',
        profileImage: 'https://picsum.photos/seed/7/200',
        message: 'Hola, soy Sofía. ¿Cómo puedo ayudarte hoy?',
        responses: [
            '¿Qué colores son tus favoritos?',
            '¿Prefieres un look atrevido o algo más sencillo?',
        ],
    },
    {
        id: 8,
        name: 'Javier Torres',
        profileImage: 'https://picsum.photos/seed/8/200',
        message: '¡Hola! Soy Javier. ¿Qué estilo tienes en mente?',
        responses: [
            '¿Te interesan las últimas tendencias?',
            '¿Buscas algo cómodo o más elegante?',
        ],
    },
    {
        id: 9,
        name: 'Clara Fernández',
        profileImage: 'https://picsum.photos/seed/9/200',
        message: 'Hola, soy Clara. Estoy aquí para inspirarte.',
        responses: [
            '¿Tienes alguna prenda específica en mente?',
            '¿Qué tipo de materiales prefieres?',
        ],
    },
    {
        id: 10,
        name: 'Andrés Castillo',
        profileImage: 'https://picsum.photos/seed/10/200',
        message: 'Hola, soy Andrés. ¿Cómo puedo ayudarte a destacar?',
        responses: [
            '¿Prefieres un look más urbano o clásico?',
            '¿Tienes algún accesorio que te gustaría combinar?',
        ],
    },
    {
        id: 11,
        name: 'Paula Ruiz',
        profileImage: 'https://picsum.photos/seed/11/200',
        message: '¡Hola! Soy Paula. Vamos a encontrar tu estilo.',
        responses: [
            '¿Qué estilos de zapatos prefieres?',
            '¿Te gustan los estampados o los colores sólidos?',
        ],
    },
    {
        id: 12,
        name: 'Diego Hernández',
        profileImage: 'https://picsum.photos/seed/12/200',
        message: 'Hola, soy Diego. ¿Qué necesitas para tu guardarropa?',
        responses: [
            '¿Buscas ropa de día o de noche?',
            '¿Prefieres algo ajustado o más suelto?',
        ],
    },
    {
        id: 13,
        name: 'Elena Vega',
        profileImage: 'https://picsum.photos/seed/13/200',
        message: '¡Hola! Soy Elena. ¿Cómo puedo ayudarte hoy?',
        responses: [
            '¿Qué tonos prefieres en tu vestuario?',
            '¿Buscas algo formal o casual?',
        ],
    },
    {
        id: 14,
        name: 'Gabriel Moreno',
        profileImage: 'https://picsum.photos/seed/14/200',
        message: 'Hola, soy Gabriel. ¿Listo para renovar tu estilo?',
        responses: [
            '¿Qué tipo de looks te inspiran?',
            '¿Buscas algo para uso diario o para ocasiones especiales?',
        ],
    },
    {
        id: 15,
        name: 'Valeria Ortiz',
        profileImage: 'https://picsum.photos/seed/15/200',
        message: '¡Hola! Soy Valeria. Estoy aquí para asesorarte.',
        responses: [
            '¿Qué estilo te resulta más cómodo?',
            '¿Te gustaría incluir más accesorios en tu look?',
        ],
    },
    {
        id: 16,
        name: 'Hugo Ramírez',
        profileImage: 'https://picsum.photos/seed/16/200',
        message: 'Hola, soy Hugo. ¿Qué necesitas para mejorar tu estilo?',
        responses: [
            '¿Prefieres marcas específicas o algo más general?',
            '¿Qué prenda crees que falta en tu armario?',
        ],
    },
];

export default function StylistsScreen() {
    return (
        <ScrollView>
            <SafeAreaView>
                <VStack space='lg' className='px-4 bg-white py-4'>
                    <Heading size='2xl'>Estilistas personales</Heading>
                    {
                        stylists.map((stylist) => (
                            <StylistItem
                                id={stylist.id}
                                name={stylist.name}
                                key={stylist.id}
                                pictureURL={stylist.profileImage}
                                highlights={stylist.highlights}
                                description={stylist.description}
                            />
                        ))
                    }
                </VStack>
            </SafeAreaView>
        </ScrollView>
    );
}

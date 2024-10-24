import Image from '../assets/banner.png'
import { Heading, Text, Flex, Section, Box, Button, Container } from '@radix-ui/themes'

export default function Hero() {
    return (
        <Section className='hero-bg' p="0" height="600px" >
            <Flex align='center' style={{ height: "100%" }} >
                <Container>
                    <Heading as='h1' size="9" weight="bold" color='cyan' style={{ color: 'white' }}> Fitsme </Heading>
                    <Text size="6" style={{ color: 'white' }}> Cambia tu armario todos los días. </Text>
                    <br />
                    <Text size="6" style={{ color: 'white' }}> Sostenible y ético. </Text>
                    <Box mt="2" >
                        <Button mr="1" radius='full'> Crear una cuenta </Button>

                        <Button mr="1" radius='full' variant='surface'> Ir a la tienda </Button>
                    </Box>
                    {/* <img src={Image} alt="" /> */}
                </Container>
            </Flex>
        </Section>
    )
}
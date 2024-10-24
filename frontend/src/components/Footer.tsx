// Footer.tsx
import React from 'react';
import { Flex, Box, Link, Container } from '@radix-ui/themes';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer style={{ backgroundColor: 'white'}} >
      <Container p="4">
        <Flex justify="between" >
          <Flex direction="column">
            <Link href='/quienes-somos'>¿Quienes somos?</Link>
            <Link href='Carreras'>Carreras</Link>
            <Link href='Sostenibilidad'>Sostenibilidad</Link>
            <Link href='Prensa'>Prensa</Link>
            <Link href='Publicidad'>Publicidad</Link>
          </Flex>
          <Flex direction="column">
            <Link href='¿Como funciona?'>¿Como funciona?</Link>
            <Link href='Verificacion de articulos'>Verificacion de articulos</Link>
            <Link href='Conviertete en Digital Stylist'>Conviertete en Digital Stylist</Link>
          </Flex>
          <Flex direction="column">
            <Link href='Soporte'>Soporte</Link>
            <Link href='Vender'>Vender</Link>
            <Link href='Comprar'>Compra</Link>
          </Flex>
        </Flex>
      </Container>
      <Container p="4">
        <Flex justify="between">
          <Link href='/terms-conditions'>
            Terminos y condiciones
          </Link>
          <Link href='/privacy'>
            Politica de privacidad
          </Link>
          <Link href='/cookies'>
            Cookies
          </Link>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
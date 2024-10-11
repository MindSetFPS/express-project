// Footer.tsx
import React from 'react';

interface FooterProps {
  year: number;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ year, companyName }) => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {year} {companyName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
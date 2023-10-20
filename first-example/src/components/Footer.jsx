import React from 'react';

function Footer({ author }) {
  return (
    <div>
      <footer>
        <p>Desenvolvido por <strong>{author}</strong></p>
      </footer>
    </div>
  );
}

export default Footer;

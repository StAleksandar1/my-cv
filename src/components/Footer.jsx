import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} - Aleksandar Stojkovski</p>
    </footer>
  );
}

export default Footer;

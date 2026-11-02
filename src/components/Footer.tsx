const Footer = () => {
  return (
    <footer className="flex flex-col-reverse gap-2 text-xs md:flex-row text-text/50 md:items-center justify-between p-5 lg:px-10">
      <p>© Copyright Studio Fryzjerskie Beauty All rights reserved.</p>
      <a
        className="block"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Grunwaldzka 16T, 41-800 Zabrze (Otwiera mapę Google w nowym oknie)"
        href="https://www.google.com/maps/place/Grunwaldzka+16t,+41-800+Zabrze/@50.3116076,18.7646332,17z/data=!3m1!4b1!4m6!3m5!1s0x4711321acc1977e1:0x702d275a9cc708ac!8m2!3d50.3116042!4d18.7672081!16s%2Fg%2F11l5l3tfk2?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D"
      >
        Grunwaldzka 16T, 41-800 Zabrze
      </a>
    </footer>
  );
};

export default Footer;

import { NavLink } from 'react-router';

export default function Home() {
  return (
    <main>
      <p className="perex">
        Začínající frontend vývojářka - portfolio v procesu 🛠️
      </p>
      <div className="page">
        <h2>Vítejte!</h2>
        <p>
          👋 Ahoj! Jsem Patricie – pečlivá a zvídavá tvůrkyně, která se rozhodla
          změnit směr kariéry a přejít z marketingu do IT. Baví mě hledat chytrá
          řešení, pracovat systematicky, ale zároveň kreativně. Věřím, že
          technologie mají obrovský potenciál zjednodušit život a ráda bych byla
          součástí jejich tvorby. Věnuji se převážně frontendovému vývoji v
          Reactu a Next.js, vystudovala jsem Digitální Akademii: Web od
          Czechitas a mou ambicí je stát se fullstack vývojářkou. Mám smysl pro
          detail, chuť se neustále učit a práci odvádím s důrazem na kvalitu i
          uživatelský přínos.
        </p>
        <hr />
        <div className="buttons__sites">
          <NavLink to="/about">Více o mně</NavLink>
          <NavLink to="/projects">Moje projekty</NavLink>
          <NavLink to="/contact">Kontakujte mě</NavLink>
        </div>
      </div>
    </main>
  );
}

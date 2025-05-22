import { NavLink } from 'react-router';

export default function About() {
  return (
    <main>
      <p className="perex">
        Začínající frontend vývojářka - portfolio v procesu 🛠️
      </p>
      <div className="page">
        <h2>O mně</h2>
        <h3>Kdo jsem?</h3>
        <p>
          Jmenuji se Patricie a v současnosti pracuji jako marketingová
          specialistka. Už několik let ale aktivně mířím směrem k IT. Baví mě
          hledat funkční řešení, tvořit něco užitečného a zároveň se neustále
          učit nové věci. Svůj zájem jsem nejdřív zkoumala přes kratší kurzy, a
          postupně jsem se víc a víc zamilovala do světa frontendového vývoje.
          Momentálně se soustředím hlavně na React a Next.js a cílem do budoucna
          je stát se fullstack vývojářkou.
        </p>
        <h3>Vzdělání a kurzy</h3>
        <p>
          Moje cesta do IT začala u Czechitas, kde jsem absolvovala několik
          kratších kurzů (např. Úvod do Pythonu, testování nebo Salesforce).
          Postupně jsem přešla k frontendu a v roce 2023 jsem dokončila
          semestrální kurz JavaScript 1. V červnu 2024 jsem úspěšně absolvovala
          čtyřměsíční Digitální Akademii: Web. V rámci Akademie jsem si
          vyzkoušela týmovou spolupráci, práci s Gitem, návrh uživatelského
          rozhraní i programování ve frameworku Next.js. Mé projekty a domácí
          úkoly najdete na GitHubu.
        </p>
        <h3>Pracovní zkušenosti a přesah do IT</h3>
        <p>
          Můj profesní základ je v marketingu, kde se věnuji především obsahové
          strategii, plánování kampaní a mezioborové komunikaci. Díky tomu umím
          dobře rozpoznat potřeby uživatelů, efektivně plánovat a dotahovat věci
          do konce. Zkušenosti z marketingu vnímám jako silnou výhodu – rozumím
          uživatelské perspektivě, znám význam UX a nebojím se týmové
          spolupráce. To všechno jsou dovednosti, které skvěle doplňují
          technické schopnosti vývojáře.
        </p>

        <div className="work">
          <h4>Marketingový specialista</h4>
          <p>10/2020 - současnost</p>
          <p>Comander s.r.o., Litvínov </p>
          <ul>
            <li>Administrace e-shopu - vkládání a úprava článků, produktů</li>
            <li>
              Příprava příspěvků na sociální sítě, e-mailové rozesílky, textace
              produktů
            </li>
            <li>
              Spolupráce s externisty a agenturou v rámci CZ a DE organiky
              (komunikace v angličtině)
            </li>
            <li>Práce samostatně i v týmu</li>
          </ul>
          <h4>Administrativní pracovník</h4>
          <p>03/2020 - 10/2020</p>
          <p>Eden, Litvínov </p>
          <ul>
            <li>Komunikace se zákazníky</li>
            <li>Dozor nad internetovým obchodem (objednávky)</li>
          </ul>
          <h4>Operátor výroby</h4>
          <p>11/2017 - 01/2020</p>
          <p>Hella Autotechnik Nova, s.r.o. Mohelnice </p>
          <ul>
            <li>Výroba světel do aut</li>
            <li>Zodpovědnost nad malým týmem</li>
          </ul>
          <h4>Projektový manažer</h4>
          <p>04/2017 - 11/2017</p>
          <p>ZLKL, s.r.o. Loštice </p>
          <ul>
            <li>Personalistika</li>
            <li>Vyřizování dotace na anglický jazyk</li>
            <li>Jednání s úřadem práce</li>
          </ul>
        </div>
        <hr />
        <div className="buttons__sites">
          <NavLink to="/">Domů</NavLink>
          <NavLink to="/projects">Moje projekty</NavLink>
          <NavLink to="/contact">Kontakujte mě</NavLink>
        </div>
      </div>
    </main>
  );
}

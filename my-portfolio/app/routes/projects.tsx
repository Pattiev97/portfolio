import { NavLink } from 'react-router';

export default function Projects() {
  return (
    <main>
      <p className="perex">
        Začínající frontend vývojářka - portfolio v procesu 🛠️
      </p>
      <div className="page">
        <h2>Projekty</h2>

        <p>
          🛠️ Na této stránce najdete výběr mých projektů, které jsem vytvořila v
          rámci studia i ve volném čase. Každý z nich mi pomohl rozvíjet
          dovednosti v oblasti frontendového vývoje a prohloubit porozumění
          technologiím jako JavaScript, React, Next.js nebo TypeScript. Některé
          projekty vznikly individuálně, jiné ve spolupráci s dalšími
          vývojářkami – všechny ale spojuje snaha o čistý kód, funkčnost a dobrý
          uživatelský zážitek.
        </p>

        <div className="projects">
          <div>
            <h3>Piškvorky</h3>
            <p>
              Jednoduchá webová hra vytvořená v JavaScriptu, HTML a CSS. Celý
              projekt jsem vytvořila samostatně a zaměřila se na logiku tahu,
              kontrolu výhry a přehledný kód.
            </p>
            <img
              className="projects__img"
              src="/Piskvorky.jpg"
              alt="Piškvorky"
            />
          </div>
          <div>
            <h3>O projektu BalancePal</h3>
            <p>
              Statická stránka vytvořená v HTML a CSS ve spolupráci s další
              účastnicí akademie. Slouží jako rozcestník k finálnímu projektu
              BalancePal a shrnuje jeho cíl, funkce a technologické pozadí.
            </p>
            <img
              className="projects__img"
              src="/About_BalancePal.jpg"
              alt="O projektu BalancePal"
            />
          </div>
          <div>
            <h3>BalancePal</h3>
            <p>
              Závěrečný týmový projekt vytvořený v Reactu a Next.js - pomáhá
              uživatelům vyvažovat práci a osobní život. Zaměřili jsme se na
              přehledný design, uživatelskou přívětivost a jednoduchou správu
              dat.
            </p>
            <img
              className="projects__img"
              src="/BalancePal.jpg"
              alt="Projekt BalancePal"
            />
          </div>
          <div>
            <h3>Nekonečné piškvorky (v přípravě)</h3>
            <p>
              Variace klasických piškvorek, kde se první tah hráče vždy
              automaticky smaže. Cílem je vytvořit zábavnou, „nekonečnou“ verzi
              hry, která prověří trpělivost i logiku hráče.
            </p>
            <img
              className="projects__img"
              src="/Coming_soon.jpg"
              alt="Nekonečné piškvorky v přípravě"
            />
          </div>
          <div>
            <h3>Svatební web (v přípravě)</h3>
            <p>
              Jednoduchý a elegantní web jako rozcestník ke svatebním informacím
              – místo, čas, harmonogram a další důležité detaily. Bude
              přehledný, responzivní a přizpůsobený konkrétní události.
            </p>
            <img
              className="projects__img"
              src="/Coming_soon.jpg"
              alt="Svatební web v přípravě"
            />
          </div>
        </div>
        <hr />
        <div className="buttons__sites">
          <NavLink to="/">Domů</NavLink>
          <NavLink to="/about">Více o mně</NavLink>
          <NavLink to="/contact">Kontakujte mě</NavLink>
        </div>
      </div>
    </main>
  );
}

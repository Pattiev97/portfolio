import { NavLink } from 'react-router';

export default function Contact() {
  return (
    <main>
      <p className="perex">
        Začínající frontend vývojářka - portfolio v procesu 🛠️
      </p>
      <div className="page">
        <h2>Kontakt</h2>
        <p>Telefonní číslo: 123 456 789</p>
        <p>E-mail: test@test.cz</p>
        <hr />
        <div className="buttons__sites">
          <NavLink to="/">Domů</NavLink>
          <NavLink to="/about">Více o mně</NavLink>
          <NavLink to="/projects">Moje projekty</NavLink>
        </div>
      </div>
    </main>
  );
}

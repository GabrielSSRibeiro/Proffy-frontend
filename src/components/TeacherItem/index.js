import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars.githubusercontent.com/u/49738156?v=4" alt="avatar" />
        <div>
          <strong>Nome</strong>
          <span>Matéria</span>
        </div>
      </header>

      <p>
        lorem
        <br />
        <br />
        ipsum.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

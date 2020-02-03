import React from "react";
import Mo from "./modallog.js";
import "./Company.css";
function Company() {
  return (
    <div>
      <div className="bkgmenu">
        <ul className="Nav-all">
          <li className="menu">
            <img
              src="https://img.icons8.com/android/24/000000/menu.png(116 o)
https://img.icons8.com/android/24/000000/menu.png
"
            />{" "}
            Menu
          </li>
          <li className="logo">
            <a href="#">Dashtock</a>
          </li>
          <li className="search">
            <i class="fa fa-fw fa-search"></i>
          </li>
          <li className="user">
            <Mo />
          </li>
        </ul>
      </div>

      <div>
        <figure class="snip1563">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1(Non développé automatiquement, car 14 Mo est trop grand. Vous pouvez quand même le développer ou l'ouvrir dans une nouvelle fenêtre.)&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
            alt="sample110"
          />
          <figcaption>
            <h3>Plus que des logiciels de gestion</h3>
            <p>Nos logiciels sont innovants et performants.</p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1563">
          <img
            src="https://images.unsplash.com/photo-1557186817-c11ad50d5b41?ixlib=rb-1.2.1(Non développé automatiquement, car 2 Mo est trop grand. Vous pouvez quand même le développer ou l'ouvrir dans une nouvelle fenêtre.)&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="sample59"
          />
          <figcaption>
            <h3>Dashtock</h3>
            <p>Votre Satisfaction c'est notre satisfaction </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1563">
          <img
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1(270 ko)
https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1
&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="sample110"
          />
          <figcaption>
            <h3>Nos Chiffres</h3>
            <p>30% Réinvestis en R&D</p>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    </div>
  );
}
export default Company;

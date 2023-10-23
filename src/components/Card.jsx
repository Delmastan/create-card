import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <img src="https://fr.web.img6.acsta.net/c_310_420/pictures/23/05/11/10/00/1986933.jpg" />
      <div>
        <h1>Spider-man : Across the spider-verse</h1>
        <p>⭐⭐⭐⭐⭐</p>
        <h3>Synopsis</h3>
        <p>
          Après avoir retrouvé Gwen Stacy, Spider-Man, le sympathique héros
          originaire de Brooklyn, est catapulté à travers le Multivers, où il
          rencontre une équipe de Spider-Héros chargée d'en protéger
          l'existence. Mais lorsque les héros s'opposent sur la façon de gérer
          une nouvelle menace, Miles se retrouve confronté à eux et doit
          redéfinir ce que signifie être un héros afin de sauver les personnes
          qu'il aime le plus.
        </p>
      </div>
      <div>
        <h2>Plateforme</h2>
        <ul>
          <li>Netflix</li>
          <li>Amazon</li>
          <li>Disney+</li>
          <li>Molotov.tv</li>
        </ul>
        <button>Regarder</button>
      </div>
    </div>
  );
}

export default Card;

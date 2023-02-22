import Avatar from "../components/Home/Avatar.js";
import Header from "../components/Home/Header.js";
import Card from "../components/portfolio/Card.js";
import Modal from "../components/portfolio/PortfolioModal.js";
import CardEmpty from "../components/portfolio/CardEmpty.js";
import "../css/portfolio/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="bodyPortfolio">
      <Avatar />
      <div className="bodyPortfolio_data">
        <Header
          titleFr={"Portfolio de zKittyGB"}
          titleEn={"zKittyGB's Portfolio"}
        />
        <div className="bodyPortfolio_data_gallery">
          <Modal />
          <div className="card_list">
            <Card
              picture={"hrnet"}
              title={"Project n°7: HRnet"}
              subjectFR={"Gestionnaire de dossiers d'employés"}
            />
            <Card
              picture={"argentBank"}
              title={"Project n°6: ArgentBank"}
              subjectFR={"Système d'authentification via une API"}
            />
            <Card
              picture={"sportsee"}
              title={"Project n°5: Sportsee"}
              subjectFR={"Tableau de bord analytique"}
            />
            <Card
              picture={"kasa"}
              title={"Project n°4: Kasa"}
              subjectFR={"Site d'annonce de logements immobilier"}
            />
            <Card
              picture={"ptitsplats"}
              title={"Project n°3: Les petits plats"}
              subjectFR={"Site de recettes de cuisine"}
            />
            <Card
              picture={"fisheye"}
              title={"Project n°2: FishEye"}
              subjectFR={"Catalogue de photographes"}
            />
            <Card
              picture={"ohmyfood"}
              title={"Project n°1: Ohmyfood"}
              subjectFR={"Répertoire de menus pour restaurant"}
            />
            <CardEmpty />
            <CardEmpty />
          </div>
        </div>
      </div>
    </div>
  );
}

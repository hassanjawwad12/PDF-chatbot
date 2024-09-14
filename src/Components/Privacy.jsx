import { data } from "autoprefixer";
import logo from "../assets/logo.png";

const Privacy = () => {



  return (
    <>
      <button class="w-full flex justify-center items-center pt-14 space-x-5 bg-gradient-to-t from-white via-[#7f18ef]/40 to-[#C9EEFF]/80 ">
        <img
          src={logo}
          class="w-16"
          onClick={() => {
            window.location.replace("/");
          }}
        />
        <text
          class="font-heading font-bold text-6xl"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          Yadoc
        </text>
      </button>
      <div className="flex flex-col items-center p-4">
        <div className="text-center mt-4 ">
          <h1 className="text-black font-bold text-5xl mt-20 ">
            Politique de confidentialité
          </h1>
          <p className="text-gray-500 text-xl md:pl-16 md:pr-16 pt-4">
            Chez Yadoc, nous nous engageons à protéger votre vie privée et à
            assurer la sécurité de toutes les informations personnelles que vous
            nous fournissez. Cette politique de confidentialité décrit nos
            pratiques concernant la collecte, l'utilisation, la divulgation et
            la protection des informations personnelles lorsque vous utilisez
            notre site Web ou tout service proposé par Yadoc (désignés
            collectivement par le "service").
          </p>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col items-center mt-8  p-4">
        <div className="text-center ml-4 mr-4">
          <h2 className="text-black lg:font-bold font-extrabold mt-16 md:text-5xl text-2xl">
            1. Informations que nous recueillons
          </h2>
          <p className=" text-md  mt-4  ">
            1.1 Informations personnelles : Lorsque vous utilisez notre Service,
            nous pouvons collecter des informations personnelles que vous
            fournissez volontairement, telles que votre nom, votre adresse
            e-mail et toute autre information que vous choisissez de fournir
            lorsque vous nous contactez ou utilisez des fonctionnalités
            spécifiques de notre Service.
          </p>
          <p className=" text-md  mt-4">
            1.2 Informations d'utilisation : Nous pouvons collecter des
            informations sur vos interactions avec notre Service, y compris
            votre adresse IP, le type de navigateur, le système d'exploitation,
            les URL de référence et d'autres informations d'utilisation. Ces
            données sont collectées automatiquement via des cookies, des balises
            Web et des technologies similaires.
          </p>
        </div>

        <div className="text-center ml-4 mr-4">
          <h2 className="text-black lg:font-bold font-extrabold mt-16 md:text-5xl text-2xl">
            2. Utilisation des informations
          </h2>
          <p className=" text-md mt-4">
            2.1 Fournir et améliorer notre service : nous pouvons utiliser les
            informations que nous recueillons pour fournir et améliorer notre
            service, répondre aux demandes de renseignements, traiter les
            transactions, personnaliser votre expérience et analyser et
            améliorer la fonctionnalité et les performances de notre service.
          </p>
          <p className=" text-md mt-4">
            2.2 Communication : Nous pouvons utiliser vos informations
            personnelles pour communiquer avec vous, vous envoyer des mises à
            jour importantes, des newsletters, du matériel promotionnel et
            d'autres informations relatives à notre Service. Vous pouvez refuser
            de recevoir de telles communications à tout moment en suivant les
            instructions de désabonnement fournies dans la communication.
          </p>
          <p className=" text-md  mt-4">
            2.3 Données agrégées : Nous pouvons agréger et anonymiser les
            données collectées via notre Service pour générer des informations
            statistiques ou analytiques. Ces données agrégées ne vous
            identifient pas personnellement et peuvent être utilisées à diverses
            fins, notamment la recherche, le marketing ou l'amélioration de
            notre service.
          </p>
        </div>

        <div className="text-center ml-4 mr-4">
          <h2 className="text-black lg:font-bold font-extrabold mt-16 md:text-5xl text-2xl">
            3. Partage d'informations
          </h2>
          <p className=" text-md  mt-4">
            3.1 Fournisseurs de services : nous pouvons partager vos
            informations personnelles avec des fournisseurs de services tiers de
            confiance qui nous aident à exploiter notre service, à mener des
            activités commerciales en notre nom ou à vous fournir des services.
            Ces prestataires de services sont contractuellement tenus de traiter
            vos informations personnelles de manière sécurisée et confidentielle
            et il leur est interdit de les utiliser à d'autres fins.
          </p>
          <p className=" text-md  mt-4">
            3.2 Exigences légales : nous pouvons divulguer vos informations
            personnelles si la loi, la réglementation, une procédure judiciaire
            ou une demande gouvernementale l'exige. Nous pouvons également
            divulguer des informations si nous estimons que cela est nécessaire
            pour protéger nos droits, notre propriété ou notre sécurité, ou les
            droits, la propriété ou la sécurité d'autrui.
          </p>
          <p className=" text-md  mt-4">
            3.3 Transferts d'entreprise : en cas de fusion, d'acquisition ou de
            vente de tout ou partie de nos actifs, nous pouvons transférer vos
            informations personnelles au tiers concerné dans le cadre de la
            transaction. Nous vous informerons par e-mail ou par un avis visible
            sur notre site Web de tout changement de propriété ou de contrôle.
          </p>
        </div>

        <div className="text-center ml-4 mr-4">
          <h2 className="text-black lg:font-bold font-extrabold mt-16 md:text-5xl text-2xl">
            4. Sécurité des données
          </h2>
          <p className=" text-md  mt-4">
            Nous prenons des mesures raisonnables pour protéger la sécurité de
            vos informations personnelles et empêcher tout accès, utilisation ou
            divulgation non autorisés. Cependant, aucune méthode de transmission
            ou de stockage n'est sécurisée à 100 %, et nous ne pouvons garantir
            la sécurité absolue de vos informations.
          </p>
        </div>

        <div className="text-center ml-4 mr-4">
          <h2 className="text-black lg:font-bold font-extrabold mt-16 md:text-5xl text-2xl">
            5. Liens tiers
          </h2>
          <p className=" text-md  mt-4">
            Notre service peut contenir des liens vers des sites Web ou des
            services tiers qui ne sont ni exploités ni contrôlés par nous. Cette
            politique de confidentialité ne s'applique pas à ces sites Web ou
            services tiers. Nous vous recommandons de consulter les politiques
            de confidentialité de tous les sites tiers que vous visitez.
          </p>
        </div>

        <div className="text-center ml-4 mr-4">
          <h2 className="text-black lg:font-bold font-extrabold mt-16 md:text-5xl text-2xl">
            6. Modifications de cette politique de confidentialité
          </h2>
          <p className=" text-md mt-4 mb-24">
            Nous pouvons mettre à jour cette politique de confidentialité de
            temps à autre. La version révisée entrera en vigueur à la date
            indiquée au début de cette politique. Nous vous encourageons à
            consulter régulièrement cette politique pour rester informé de nos
            pratiques en matière d'information.
          </p>
        </div>
      </div>

      <div class="w-full flex justify-center p-14 bg-[#7f18ef] font-text text-white space-x-32">
        <button
          onClick={() => {
            window.location.replace("/privacy");
          }}
        >
          Politique de confidentialité
        </button>
        <button
          onClick={() => {
            window.location.replace("/terms");
          }}
        >
          Termes et conditions
        </button>
      </div>
    </>
  );
};

export default Privacy;

import logo from "../assets/logo.png";
const Terms = () => {
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
          class="font-heading font-bold text-[6.3vh]"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          Yadoc
        </text>
      </button>
      <div className="flex flex-col items-center ">
        <div className="text-center mt-4 w-1/2">
          <h1 className="text-black font-bold text-5xl mt-20 ">
            Termes et conditions
          </h1>
          <p className="text-gray-500 text-xl mt-4 mb-16">
            Bienvenue sur Yadoc, une application Web qui vous permet de
            télécharger et d'interagir avec vos documents PDF. Veuillez lire
            attentivement ces conditions générales car elles régissent votre
            utilisation du produit.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col items-center mt-8">
        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl ">
          Acceptation des conditions
        </h2>
        <p className=" text-md  mt-4">
          En accédant ou en utilisant Yadoc, vous acceptez d'être lié par ces
          termes et conditions. Si vous n'êtes pas d'accord avec ces termes et
          conditions, vous ne devez pas utiliser Yadoc..
        </p>
        </div>



        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Utilisation de Yadoc
        </h2>
        <p className=" text-md  mt-4">
          Vous pouvez utiliser Yadoc uniquement à des fins personnelles ou non
          commerciales. Vous ne devez pas utiliser Yadoc à des fins illégales ou
          non autorisées.
        </p>
        </div>


        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Téléchargement de documents PDF
        </h2>
        <p className=" text-md mt-4">
          Vous pouvez télécharger des documents PDF sur Yadoc dans le but d'en
          discuter avec d'autres utilisateurs. Vous ne devez pas télécharger de
          documents PDF illégaux, diffamatoires, obscènes ou autrement
          répréhensibles.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Conduite de l'utilisateur
        </h2>
        <p className=" text-md  mt-4">
          Vous êtes seul responsable de votre conduite sur Yadoc. Vous ne devez
          pas vous livrer à une conduite illégale, diffamatoire, menaçante ou
          abusive. Vous ne devez pas télécharger de documents PDF qui
          enfreignent les droits de propriété intellectuelle d'autrui.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Contenu utilisateur
        </h2>
        <p className=" text-md  mt-4">
          Yadoc vous permet d'importer et de visualiser des documents PDF. Vous
          conservez la pleine propriété et le contrôle du contenu que vous
          importez dans l'application. Nous ne revendiquons pas la propriété de
          votre contenu, et nous ne le surveillons pas ou n'y accédons pas, sauf
          si les lois applicables l'exigent.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Autorisations d'application
        </h2>
        <p className=" text-md  mt-4">
          Afin de fournir la fonctionnalité prévue de notre application, nous
          pouvons vous demander certaines autorisations, telles que l'accès au
          stockage ou au système de fichiers de votre appareil. Ces
          autorisations ont uniquement pour but de vous permettre d'importer et
          de visualiser des documents PDF stockés sur votre appareil.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Informations collectées automatiquement
        </h2>
        <p className=" text-md  mt-4">
          Lorsque vous utilisez notre application, nous pouvons collecter
          automatiquement certaines informations, telles que des informations
          techniques sur votre appareil, des statistiques d'utilisation de
          l'application et des rapports de plantage. Ces informations sont
          collectées sous une forme anonymisée et agrégée et sont utilisées pour
          améliorer les performances, l'expérience utilisateur et la qualité
          globale de notre application.
        </p>
        </div>
        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Confidentialité
        </h2>
        <p className=" text-md  mt-4">
          Votre vie privée est importante pour nous. Veuillez consulter notre
          politique de confidentialité pour savoir comment nous collectons,
          utilisons et protégeons vos informations personnelles.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Résiliation
        </h2>
        <p className=" text-md  mt-4">
          Nous pouvons résilier votre utilisation de Yadoc à tout moment pour
          quelque raison que ce soit, y compris si nous pensons que vous avez
          violé ces termes et conditions.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Exclusion de garanties
        </h2>
        <p className=" text-md  mt-4">
          Yadoc est fourni "tel quel" et "tel que disponible". Nous ne
          garantissons pas que Yadoc sera ininterrompu, sans erreur ou sans
          temps d'arrêt.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Limitation de responsabilité
        </h2>
        <p className=" text-md  mt-4">
          Dans la mesure maximale autorisée par la loi, nous ne serons pas
          responsables des dommages directs, indirects, accessoires, spéciaux ou
          consécutifs résultant de ou liés à votre utilisation de Yadoc.
        </p>
        </div>
        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Droit applicable
        </h2>
        <p className=" text-md  mt-4">
          Ces termes et conditions seront régis et interprétés conformément aux
          lois du pays ou de l'état où ils sont utilisés.
        </p>
        </div>

        <div className="text-center ml-4 mr-4">
        <h2 className="text-black font-bold mt-16 md:text-5xl text-2xl">
          Modifications de ces Termes et Conditions
        </h2>
        <p className=" text-md  mb-24 mt-4">
          Nous nous réservons le droit de modifier ces termes et conditions à
          tout moment sans préavis. Votre utilisation continue de Yadoc après
          toute modification de ces termes et conditions constitue votre
          acceptation des termes et conditions révisés.
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

export default Terms;

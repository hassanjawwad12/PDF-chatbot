import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiFileOn } from "react-icons/ci";

import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import SingleContent from "./SingleContent";

function Homepage() {
  const [ContentArr, setContentArr] = useState([
    {
      title: "Gain de temps : accédez instantanément aux informations clés",
      desc: "Notre plateforme révolutionne votre façon de travailler avec vos documents, vous faisant gagner un temps précieux. En synthétisant vos documents, vous allez pouvoir accéder rapidement aux informations les plus pertinentes sans passer des heures à chercher dans de longs documents.",
      picture: pic1,
    },
    {
      title: "Productivité améliorée : absorber et décider efficacement",
      desc: "Dites adieu à la surcharge dinformations et accueillez un flux de travail rationalisé. Nos algorithmes dIA condensent vos documents complexes dans des formats digestibles, ce qui vous permet de comprendre et dabsorber plus facilement et rapidement de gros volumes dinformations.",
      picture: pic2,
    },
    {
      title:
        "Compréhension améliorée : saisissez rapidement les concepts de base",
      desc: "Avec notre solution, vous pouvez débloquer un niveau de compréhension plus profond, facilitant une meilleure prise de décision et la rétention des connaissances.",
      picture: pic3,
    },
    {
      title: "Hébergé en Europe pour une protection optimale des données",
      desc: "Nos mesures de sécurité intègrent des mécanismes dauthentification robustes, des protocoles de transfert de données sécurisés et des contrôles daccès avancés. Ces mises en œuvre techniques garantissent que vos documents restent confidentiels et protégés contre tout accès non autorisé.",
      picture: pic4,
    },
  ]);

  return (
    <div class="w-full min-h-screen flex flex-col space-y-14 ">
      <div class="w-full min-h-screen flex flex-col items-center space-y-20  ">
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
        <div class="w-full min-h-screen flex flex-col px-14 pb-14 space-y-20 items-center ">
          <div class="">
            <div class="lg:w-[60vw] w-full flex flex-col items-center text-center space-y-5">
              <text class="px-5 text-4xl md:text-6xl mt-1 text-bold leading-[6vh] font-heading font-bold">
                Révolutionnez vos interactions avec les documents
              </text>
              <div class="flex flex-col">
                <text class="text-xl font-text font-light">
                  Libérer le plein potentiel de vos documents n'a jamais été
                  aussi simple !
                </text>
                <text class="text-xl font-text font-light">
                  Téléchargez simplement votre document et notre chatbot le
                  synthétise.
                </text>
                <text class="text-xl font-text font-light">
                  Trouvez la réponse à votre question en intéragissant
                  directement avec notre chatbot.
                </text>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-col justify-center items-center space-y-10 ">
            <div class="lg:w-full h-full w-full flex justify-center items-center rounded-lg px-4 md:px-16 md:py-16 py-4 bg-gradient-to-r from-[#7f18ef]/40 to-[#C9EEFF]/80 ">
              <div class="w-full h-full flex flex-col items-center rounded-lg bg-white border-dashed border-4 border-[#7f18ef] justify-between">
                <text class="text-xl font-bold font-heading">
                  Importer votre document
                </text>
                <CiFileOn size="10rem" color="#7f18ef" class="rounded-lg" />
                <div class="flex flex-col items-center font-text">
                  <text>ou deposer votre fichier ici</text>
                  <text class="text-gray-400">
                    Formats autorisés : '.pdf', '.txt', '.ppt', '.pptx', '.doc',
                    '.docx'
                  </text>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-5">
              <img src={pic6} />
              <text class="font-text text-gray-500">
                Rejoignez notre liste d'attente{" "}
                <text class="text-[#7f18ef]">450+</text>
              </text>
            </div>
          </div>

          <div class="w-full flex flex-col items-center space-y-20 ">
            {ContentArr.map((obj, index) => (
              <SingleContent obj={obj} index={index} />
            ))}
          </div>
          <div class="w-full flex justify-center">
            <div class="w-full flex justify-center  py-20 rounded-2xl bg-[#7f18ef]">
              <div className="w-full flex flex-col items-center space-y-14">
                <text class="w-[80%] text-2xl leading-2 lg:w-[40%] lg:text-5xl font-heading font-bold text-center text-white">
                  Révolutionnez l'expérience avec vos documents. Inscrivez-vous
                  à la beta dès maintenant !
                </text>
                <div class="w-full flex flex-col items-center space-y-3">
                  <input
                    class="w-[90%] lg:w-[70%] px-3 py-2 rounded-full outline-none"
                    placeholder="Nom"
                  ></input>
                  <input
                    class="w-[90%] lg:w-[70%] px-3 py-2 rounded-full outline-none"
                    placeholder="Email"
                  ></input>
                  <button class="w-[40%] py-2 bg-white rounded-full font-text font-bold text-[#7f18ef]">
                    Envoyer
                  </button>
                </div>
                <div class="flex flex-col items-center space-x-5">
                  <img src={pic5} />
                  <text class="font-text text-white">
                    Rejoignez notre liste d'attente 450+
                  </text>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
}

export default Homepage;

// bg-gradient-to-r from-white via-[#7f18ef]/40 to-[#C9EEFF]/80

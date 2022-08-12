import React from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context/ContextApi";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails matched your search</h2>;
  }

  return <section>
    <h2 className="section-title">
      coktails
    </h2>
    <div className="cocktails-center">

      {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
      //* datayı import et daha sonra bir componente maple maplediğin yerde baska bir componente prop olarak gönder. ister destruc et veya orda et.

    </div>
  </section>;
};

export default CocktailList;

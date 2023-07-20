const GUITARE = {
    Nom = "Guitare Acoustique";
    Prix = 113750;
    Description = "Guitare acoustique, forme dreadnought";
    Image = <img src = "https://www.thomann.de/fr/cort_ad880ce_natural_satin.htm?listPosition=0&type=category" alt = "guitare"/>;
};
export default GUITARE;


const Nom = () => {
    return (
      <>
      <h1>
        Guitare Acoustique
        <GUITARE/>
      </h1>
      </>
    );
  };
  export default Nom;

  
  const Prix = () => {
    return (
      <>
      <h1>
        113750
        <GUITARE/>
      </h1>
      </>
    );
  };
  export default Prix;

  const Description = () => {
    return (
      <>
      <h1>
        Guitare Acoustique, guitare dreadnought. Il est évident que le choix du premier instrument est déterminant. La SD25 ou la SA25 sont les deux guitares que je conseille à mes nouveaux élèves. Elles sont équilibrées, justes et surtout bien conçues !
        <GUITARE/>
    </h1>
      </>
    );
  };
  export default Description;
  
  const Image = () => {
    return (
      <>
      <img src = "https://www.thomann.de/fr/cort_ad880ce_natural_satin.htm?listPosition=0&type=category" alt = "guitare"/>;
      <GUITARE/> 
      </>
    );
  };

  export default Image;

  
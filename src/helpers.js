const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const getAdsMonth = () => {
  const fechaActual = new Date();

  const diaActual = fechaActual.getDate();
  const primerDiaDelMes = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    1
  );

  const enPrimeraMitadDelMes =
    diaActual <= Math.ceil(primerDiaDelMes.getDate() / 2);

  const nombreMesActual = meses[fechaActual.getMonth()];
  const nombreMesSiguiente = meses[(fechaActual.getMonth() + 1) % 12];

  if (enPrimeraMitadDelMes) {
    return `${nombreMesActual}`;
  } else {
    return `${nombreMesSiguiente}`;
  }
};

const getSeason = (_month) => {
  const month = _month.toLowerCase();
  if (month === "enero" || month === "febrero" || month === "marzo") {
    return "invierno";
  } else if (month === "abril" || month === "mayo" || month === "junio") {
    return "primavera";
  } else if (
    month === "julio" ||
    month === "agosto" ||
    month === "septiembre"
  ) {
    return "verano";
  } else {
    return "otoño";
  }
};

const getImagesBySeason = (_season) => {
  switch (_season) {
    case "invierno":
      return ["/Images/winter_1.jpg", "/Images/winter_2.jpg"];
    case "primavera":
      return ["/Images/spring_1.jpg", "/Images/spring_2.jpg"];
    case "verano":
      return ["/Images/summer_1.jpg", "/Images/summer_2.jpg"];
    case "otoño":
      return ["/Images/autumm_1.jpg", "/Images/autumm_2.jpg"];
  }
};

export { meses, getSeason, getImagesBySeason, getAdsMonth };

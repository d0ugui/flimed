export default function dateFormat(insertedAt : Date) {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  const data: Date = new Date(insertedAt);
  const formatedData = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));

  return formatedData;
}

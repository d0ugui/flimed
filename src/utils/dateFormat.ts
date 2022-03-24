type DateProps = {
  note: {
    insertedAt: Date;
  }
}

export default function dateFormat(insertedAt : DateProps) {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  const data = new Date(insertedAt);
  const formatedData = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));

  return formatedData;
}

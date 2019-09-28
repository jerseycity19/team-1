interface Reports {
  date: string;
  region: string;
  country: string;
  institutions: string;
}

export async function addReport(params: { info: Reports }) {
  const { info } = params;
  return true;
}

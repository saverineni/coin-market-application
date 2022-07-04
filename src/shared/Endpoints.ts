
const API_BASE : any = process.env.REACT_APP_API_BASE ;


export function coinMarketsURL(
  path: string,
  currency: string,
  order: string,
  perPage: number,
  page: number
): URL {
  const baseUrl = new URL(API_BASE);
  baseUrl.pathname += path;

  baseUrl.searchParams.append('vs_currency', currency);
  baseUrl.searchParams.append('order', order);
  baseUrl.searchParams.append('per_page', perPage + '');
  baseUrl.searchParams.append('page', page + '');
  return baseUrl;
}

export function coinDetailURL(path: string, coinId: string): URL {
  const baseUrl = new URL(API_BASE);
  baseUrl.pathname += `${path}/${coinId}`;
  return baseUrl;
}



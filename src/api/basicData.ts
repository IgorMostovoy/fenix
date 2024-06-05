import { HomePageData } from '../interfaces/basicData.interface';
import { API } from '../app/api';

export async function getBasicData(): Promise<HomePageData | null> {
  if (!API.baseUrl) {
    console.error('API baseURL is not defined');
    return null;
  }
  const res = await fetch(API.baseUrl);
  if (!res.ok) {
    return null;
  }

  return await res.json();
}


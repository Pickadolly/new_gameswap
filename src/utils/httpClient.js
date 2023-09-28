import axios from 'axios';
const baseUrl = import.meta.env.VITE_API_URL;

//#region Auctions 
export async function getAllAuctions() {
  console.log(`${baseUrl}auction/getall`);
  try {
    const res = await axios.get(`${baseUrl}auction/getall`).then();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
//#endregionz


//#region Games
export async function getAllGames() {

}
//#endregion

//#region Auth

//#endregion
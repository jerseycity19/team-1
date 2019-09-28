import { UserMongoDataStore } from "../../drivers/datastores/userMongoDatastore";

interface Information {
  identification: string;
  ageRange: string;
  gender: string;
  country: string;
  language: string;
  employment: string;
  disciple: string;
  sensitivity: string;
}
const dataStore = new UserMongoDataStore();

export async function addAnonUser(params: { info: Information }) {
  const { info } = params;
  try {
    await dataStore.addUser({ userInfo: info });
    return true;
  } catch (err) {
    console.log(err);
  }
}

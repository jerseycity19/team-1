import { UserMongoDataStore } from "../../drivers/datastores/userMongoDatastore";

export interface Information {
  identification: string;
  ageRange: string;
  gender: string;
  country: string;
  language: string;
  employment: string;
  disciple: string;
  sensitivity: string;
  userIp: string;
}
const dataStore = new UserMongoDataStore();

export async function addAnonUserInfo(params: { info: Information }) {
  const { info } = params;
  try {
    const dbResponse = await dataStore.addUser({ userInfo: info });
    if (dbResponse) {
      return dbResponse;
    }
    await dataStore.findUser();
  } catch (err) {
    console.log(err);
  }
}

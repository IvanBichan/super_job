import { instance } from "common/api/common.api";

export const vacanciesApi = {
  getVacancies: () => {
    const page = 1;
    return instance.get(`vacancies?page=${page}&count=4`, {
      headers: {
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      },
    });
  },
  getAllTypeOfVacancies: () => {
    return instance.get("catalogues/");
  },
  getSpecificVacancy: (arg: ArgForGetSpecificVacancy) => {
    const catalogues = arg.catalogues ? arg.catalogues : "";
    const keyword = arg.keyword ? arg.keyword : "";
    const payment_from = arg.payment_from ? arg.payment_from : "";
    const payment_to = arg.payment_to ? arg.payment_to : "";
    const page = 1;
    return instance.get(`vacancies?page=${page}&count=4&{catalogues=1}`, {
      params: {
        page: page,
        count: 4,
        catalogues: catalogues,
        published: 1,
        keyword,
        payment_from,
        payment_to,
      },
      headers: {
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      },
    });
  },
};
//Type getSpecificVacancy
export type ArgForGetSpecificVacancy = {
  catalogues: number;
  keyword?: string;
  payment_from?: number | undefined;
  payment_to?: number | undefined;
};
//Type ResponseTypeOfProfession
export type ResponseTypeOfProfession = {
  key: number;
  positions: ResponseTypeOfProfPositions[];
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
};
export type ResponseTypeOfProfPositions = {
  id_parent: number;
  key: number;
  title: string;
  title_rus: string;
  url_rus: string;
};
//Type getVacancies
export type Vacancy = {
  canEdit: boolean;
  is_closed: boolean;
  id: number;
  id_client: number;
  payment_from: number;
  payment_to: number;
  date_pub_to: number;
  date_archived: number;
  date_published: number;
  address?: any;
  profession: string;
  work?: any;
  compensation?: any;
  candidat: string;
  metro: any[];
  currency: string;
  vacancyRichText: string;
  covid_vaccination_requirement: VacanciaCovid_vaccination_requirement;
  moveable: boolean;
  agreement: boolean;
  anonymous: boolean;
  is_archive: boolean;
  is_storage: boolean;
  type_of_work: VacanciaType_of_work;
  place_of_work: VacanciaPlace_of_work;
  education: VacanciaEducation;
  experience: VacanciaExperience;
  maritalstatus: VacanciaMaritalstatus;
  children: VacanciaChildren;
  client: VacanciaClient;
  languages: any[];
  driving_licence: any[];
  catalogues: VacanciaCatalogues[];
  agency: VacanciaAgency;
  town: VacanciaTown;
  already_sent_on_vacancy: boolean;
  rejected: boolean;
  response_info: any[];
  phone: string;
  phones: VacanciaPhones[];
  fax?: any;
  faxes?: any;
  client_logo: string;
  highlight: boolean;
  age_from: number;
  age_to: number;
  gender: VacanciaGender;
  firm_name: string;
  firm_activity: string;
  link: string;
  video: VacanciaVideo;
  latitude?: any;
  longitude?: any;
};
export type VacanciaCovid_vaccination_requirement = {
  id: number;
  title: string;
};
export type VacanciaType_of_work = {
  id: number;
  title: string;
};
export type VacanciaPlace_of_work = {
  id: number;
  title: string;
};
export type VacanciaEducation = {
  id: number;
  title: string;
};
export type VacanciaExperience = {
  id: number;
  title: string;
};
export type VacanciaMaritalstatus = {
  id: number;
  title: string;
};
export type VacanciaChildren = {
  id: number;
  title: string;
};
export type VacanciaClientTown = {
  id: number;
  title: string;
  declension: string;
  hasMetro: boolean;
  genitive: string;
};
export type VacanciaClient = {
  id: number;
  title: string;
  link: string;
  industry: any[];
  description: string;
  vacancy_count: number;
  staff_count: string;
  client_logo: string;
  address?: any;
  addresses: any[];
  url: string;
  short_reg: boolean;
  is_blocked: boolean;
  registered_date: number;
  town: VacanciaClientTown;
};
export type VacanciaCataloguesPositions = {
  id: number;
  title: string;
  key: number;
};
export type VacanciaCatalogues = {
  id: number;
  title: string;
  key: number;
  positions: VacanciaCataloguesPositions[];
};
export type VacanciaAgency = {
  id: number;
  title: string;
};
export type VacanciaTown = {
  id: number;
  title: string;
  declension: string;
  hasMetro: boolean;
  genitive: string;
};
export type VacanciaPhones = {
  number: string;
  additionalNumber?: any;
};
export type VacanciaGender = {
  id: number;
  title: string;
};
export type VacanciaVideo = {
  id: string;
  url: string;
  type: string;
};

export interface IFormData {
  countryCode: string;
  email: string;
  name: string;
  phoneNumber: string;
  budget?: string;
  query: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
  };
  geoInfo: {
    country: string;
    city: string;
  };
  fromSite: string;
  fromPage: string;
  cookies: boolean;
  orderName: string;
}

export interface IFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  agreement: boolean;
  budget?: {
    value?: string;
  };
}

export interface ICallFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  agreement: boolean;
}

export interface ISelectBudgetOptions {
  value: string;
  label: string;
}

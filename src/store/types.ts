export type GetAddressApiPayload = {
  code: string;
};

export type Place = {
  name: string;
  longitude: string;
  state: string;
  stateAbbreviation: string;
  latitude: string;
};

export type AddressType = {
  postalCode: string;
  country: string;
  countryAbbreviation: string;
  places: Place[];
};

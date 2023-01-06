export interface AddressDto {
  id: number;
  creationDate: Date;
  userId: number;
  shire: string;
  city: string;
  postalCode: string;
  postalAddress: string;
  phoneNumber: string;
  name: string;
  family: string;
  nationalCode: string;
  activeAddress: boolean;
}

export interface CreateAddressDto {
  shire: string;
  city: string;
  postalCode: string;
  postalAddress: string;
  phoneNumber: string;
  name: string;
  family: string;
  nationalCode: string;
}

export interface EditAddressDto {
  id: number;
  shire: string;
  city: string;
  postalCode: string;
  postalAddress: string;
  phoneNumber: string;
  name: string;
  family: string;
  nationalCode: string;
}

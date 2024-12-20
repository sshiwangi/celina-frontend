export interface PhonePackage {
  packageId: string;
  type: string;
  title: string;
  description: string;
  priceUSD: number;
  numberOfPhoneNumbers: number;
  rating: number;
  phoneNumbers: string[];
}

export interface MarketplaceData {
  phoneNumberMarketplace: {
    featuredPackages: PhonePackage[];
  };
}

export interface Customer {
  first_name: string;
  last_name: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  };
}

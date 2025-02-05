declare namespace Nightly {
  type Location = {
    address: string;
    city: string;
    latitude: number;
    longitude: number;
  };

  type CheckInOutTime = {
    from: string;
    to: string;
  };

  type Contact = {
    phoneNumber: string;
    email: string;
  };

  type Contacts = keyof Nightly.Contact;

  // Currency could also be defined as "string".
  // However, there are only a limited number of currencies,
  // maybe even more limited if the platform only supports a few
  type Currency = 'EUR';

  type Hotel = {
    id: number;
    name: string;
    location: Location;
    stars: number;
    checkIn: CheckInOutTime;
    checkOut: CheckInOutTime;
    contact: Contact;
    gallery: string[];
    userRating: number;
    price: number;
    currency: Currency;
  };
}

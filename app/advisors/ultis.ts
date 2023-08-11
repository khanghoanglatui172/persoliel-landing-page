export enum EService_request {
  Departure = "Departure",
  Arrival = "Arrival",
  Both = "Both",
}

export interface IPassengerInformation {
  first_name: string;
  last_name: string;
  record_locator: string;
}

export interface IFormBooking {
  travel_date: string;
  flight_Number: number;
  service_request: EService_request;

  passengerInformation: IPassengerInformation[];

  car_Service_company: string;
  car_service_phone: number;
  car_service_reservation: number;

  emergency_first_name: string;
  emergency_last_name: string;
  emergency_phone: string;

  requestor_first_name: string;
  requestor_last_name: string;
  requestor_phone: string;
  requestor_email: string;
}

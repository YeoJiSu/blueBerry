export const LOAD_RESERVATION_REQUEST = "LOAD_RESERVATION_REQUEST";
export const LOAD_RESERVATION_SUCCESS = "LOAD_RESERVATION_SUCCESS";
export const LOAD_RESERVATION_ERROR = "LOAD_RESERVATION_ERROR";

export type reservationAction =
  | typeof LOAD_RESERVATION_REQUEST
  | typeof LOAD_RESERVATION_SUCCESS
  | typeof LOAD_RESERVATION_ERROR;

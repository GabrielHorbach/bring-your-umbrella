export type GeolocationDataInterface = {
  city: string
}

export interface GeolocationCoordinates {
  readonly latitude: number;
  readonly longitude: number;
}

export interface GeolocationPosition {
  readonly coords: GeolocationCoordinates;
}

export interface GeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}

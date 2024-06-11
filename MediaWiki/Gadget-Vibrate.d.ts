
declare global {
  // TODO: Vibration( ) and GamepadVibration( ) should not depend on the existence of '#vibrate' HTML element.
  function Vibration(duration: number): void;
  function GamepadVibration(idx: int, duration: number): void;
}

export {};
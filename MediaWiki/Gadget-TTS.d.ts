declare module 'ext.gadget.TTS'{
  // TODO: Vibration( ) and GamepadVibration( ) should not depend on the existence of '#vibrate' HTML element.
  class TTS {
    constructor();
    speakSpeech(): void;
  }
  export = TTS;
}
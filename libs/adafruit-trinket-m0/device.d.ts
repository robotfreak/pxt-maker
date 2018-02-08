declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: PwmPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const SCL: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const SCK: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const MISO: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const MOSI: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const TX: DigitalPin;
}

declare namespace input {
    /**
     * Capacitive pin D1
     */
    //% block="touch D1" fixedInstance shim=pxt::getTouchButton(PIN_D1)
    const touchD1: TouchButton;

    /**
     * Capacitive pin D3
     */
    //% block="touch D3" fixedInstance shim=pxt::getTouchButton(PIN_D3)
    const touchD3: TouchButton;

    /**
     * Capacitive pin D4
     */
    //% block="touch D4" fixedInstance shim=pxt::getTouchButton(PIN_D4)
    const touchD4: TouchButton;

    /**
     * Button connecting D0 to GND.
     */
    //% block="button D0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD0: Button;


    /**
     * Button connecting D1 to GND.
     */
    //% block="button D1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D1,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD1: Button;


    /**
     * Button connecting D2 to GND.
     */
    //% block="button D2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D2,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD2: Button;
    
    
    /**
     * Button connecting D3 to GND.
     */
    //% block="button D3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D3,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD3: Button;
    
    
    /**
     * Button connecting D4 to GND.
     */
    //% block="button D4" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D4,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD4: Button;
}



declare module 'ext.gadget.DB2' {
  // Inner class definition
  class DataChange {
    params: JSON;
    local: JSON;
    global: JSON;
    root: JSON;
    refresh: boolean;
    paramChanged: boolean;
    constructor(href: string);
    control(element: HTMLElement): void;
    save(): PromiseLike<any>;
  }
  class enableDB2 {
    title: string;
    noti: Notification; // TODO: change return type to mw.notification
    useCGIProtect: HTMLElement;
    currentSearch: JSON;
    currentTitle: string;
    rootGameDB: WindowLocalStorage;
    DataChange: DataChange;
    constructor();
    getLocalNamespace(pagename: string): string;
    encode(key: string): string;
    decode(key: string): string;
    parseJSON(json: string): JSON;
    instant(): void;
    link(): void;
  }
  function specialPage(page: string, script: string, title: string): void;

  export = enableDB2;
}
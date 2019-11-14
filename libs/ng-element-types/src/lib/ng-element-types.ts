export interface AppComponentAttributes {
  person: any;
  registerCallback: (fn: (name: string) => string) => void;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type JSXify<T extends Element> = Partial<
  Omit<T, 'children'> & { children?: any[] }
>;

export type AppComponentType = JSXify<
  AppComponentAttributes & HTMLElement & { ref: any }
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ng-element': AppComponentType;
    }
  }
}

export interface AppComponentAttributes {
  person: any;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type JSXify<T extends Element> = Partial<
  Omit<T, 'children'> & { children?: any[] }
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ng-element': JSXify<AppComponentAttributes & HTMLElement & { ref: any }>;
    }
  }
}

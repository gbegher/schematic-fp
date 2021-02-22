declare module "../types" {
   export type Generic = keyof Generic.Register<any>

   export type $<G extends Generic, A> = Generic.Register<A>[G]

   namespace Generic {
      interface Register<T> {}
   }
}

export {}

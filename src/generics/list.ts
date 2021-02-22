// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

declare module "../types" {
   export type List<T> = T[]

   namespace Symbols {
      export const List: unique symbol
      export type List = typeof List
   }

   namespace Generic {
      interface Register<T> {
         [Symbols.List]: List<T>
      }
   }
}

// ---------------------------------------------------------------------------
// Dependencies
// ---------------------------------------------------------------------------

import type {
   List
} from "../types"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const list = <T>(ts: List<T>) => ts

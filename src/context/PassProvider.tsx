import { createContext, ReactNode, useContext, useState } from "react";
import { Pass } from "../interfaces/passes";
import * as passService from '../services/passService';

interface PassState {
  passes: Pass[],
  setPasses: (newPasses: Pass[]) => void,
}

export const PassContext = createContext<PassState>({
  passes: [],
  setPasses: () => { },
})

export const usePasses = () => useContext(PassContext)

export default function PassProvider({ children }: { children: ReactNode }) {

  const [passes, setPasses] = useState(passService.getAll())
  return (
    <PassContext.Provider value={{ passes, setPasses }} >
      {children}
    </PassContext.Provider>
  )
}
import { Dispatch, createContext, useContext, useReducer } from "react";
import { IActionType, IAppState, appReducer, initialState } from "./AppReducer";

const AppContext = createContext<IAppState>(initialState);

const AppDispatchContext = createContext<Dispatch<IActionType>>(() => null);

type IContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<IContextProviderProps> = ({
  children
}: IContextProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};

export const useAppDispatch = () => {
  return useContext(AppDispatchContext);
};

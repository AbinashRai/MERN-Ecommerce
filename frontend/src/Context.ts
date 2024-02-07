// import { createContext, useContext, useState } from "react";

// const MyContext = createContext<MyContextProps | undefined>();

// export const useMyContext = () => {
//   return useContext(MyContext);
// };

// export const MyContextProvider = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const allObj = {
//     cart,
//     setCart,
//   };
//   return <MyContext.Provider value={allObj}>{children}</MyContext.Provider>;
// };

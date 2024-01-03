import { FC, PropsWithChildren, createContext, useState } from "react";
interface User {
  id: String;
  name: string;
  userName: string;
  phoneNumber: String;
  password: String;
  photo?: String;
}

type authContextType = {
  userData: User;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: User) => void;
};

export const authContext = createContext<authContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setUser: (user: User) => {},
  userData: { userName: "", name: "", id: "", phoneNumber: "", password: "" },
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUser] = useState<User>({
    userName: "",
    name: "",
    id: "",
    phoneNumber: "",
    password: "",
  });

  const defaulValue = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUser,
  };

  return (
    <authContext.Provider value={defaulValue}>{children}</authContext.Provider>
  );
};

import { FC, PropsWithChildren, createContext, useState } from "react";

type chatContextType = {
  message: any[];
  setMessage: (newMessage: any) => void;
};

export const chatContext = createContext<chatContextType>({
  message: [],
  setMessage: () => {},
});

export const ChatProvider: FC<PropsWithChildren> = ({ children }) => {
  const [message, setMessage] = useState<any[]>([]);

  const defaulValue = {
    message,
    setMessage: setMessage,
  };

  return (
    <chatContext.Provider value={defaulValue}>{children}</chatContext.Provider>
  );
};

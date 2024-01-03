import { FC, PropsWithChildren, createContext, useState } from "react";
interface Group {
  id: String;
  name: String;
  subject: String;
  members?: [];
  admin?: string;
}

type groupContextType = {
  groupData: Group[];
  setGroupData: (newgroup: Group[]) => void;
};

export const groupContext = createContext<groupContextType>({
  groupData: [{ id: "", name: "", subject: "" }],
  setGroupData: () => {},
});

export const GroupProvider: FC<PropsWithChildren> = ({ children }) => {
  const [groupData, setGroupData] = useState<Group[]>([]);

  const defaulValue = {
    groupData,
    setGroupData,
  };

  return (
    <groupContext.Provider value={defaulValue}>
      {children}
    </groupContext.Provider>
  );
};

import { StyleSheet } from "react-native";

import StudyGroupChat from "../../../../../components/Chat/Chat";
import { useGlobalSearchParams } from "expo-router/src/hooks";
import { useContext, useEffect } from "react";
import useHttp from "../../../../../hooks/use-http";
import { chatContext } from "../../../../../context/chat";

export default function Page() {
  const { sendRequest } = useHttp();
  const params = useGlobalSearchParams();
  const { setMessage } = useContext(chatContext);
  const handleLoadDetail = (response) => {
    const responseData = response.data;
    const allMessage = responseData.map((res) => {
      return {
        id: res._id,
        groupId: res.group._id,
        content: res.content,
        data: res.date,
        creator: res.creator,
      };
    });

    setMessage(allMessage);
  };
  useEffect(() => {
    sendRequest(
      {
        url: `http://10.194.65.19:3000/api/v1/messages/${params.id}`,
      },
      handleLoadDetail
    );
  }, [params.id]);

  return <StudyGroupChat />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});

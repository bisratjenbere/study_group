import { StyleSheet } from "react-native";

import StudyGroupChat from "../../../../../components/Chat/Chat";
import { useGlobalSearchParams } from "expo-router/src/hooks";
import { useContext, useEffect, useState } from "react";
import useHttp from "../../../../../hooks/use-http";
import { chatContext } from "../../../../../context/chat";
import { Stack } from "expo-router";

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
        date: res.date,
        creator: { ...res.creator, id: res.creator._id },
      };
      console.log(allMessage);
    });

    setMessage(allMessage);
  };
  useEffect(() => {
    sendRequest(
      {
        url: `http://10.194.65.21:3000/api/v1/messages/${params.id}`,
      },
      handleLoadDetail
    );
  }, [params.id]);
  if (params.id)
    return (
    
        <StudyGroupChat groupId={params.id} />
     
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});

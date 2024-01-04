import { Text, StyleSheet, View, ActivityIndicator } from "react-native";

import GroupDetail from "../../../../components/Chat/GroupDetail";

import { useGlobalSearchParams } from "expo-router/src/hooks";
import { useEffect, useState } from "react";
import useHttp from "../../../../hooks/use-http";

export default function Page() {
  const { sendRequest, isLoading } = useHttp();
  const [currentGroupData, setCurrentGroup] = useState();
  const params = useGlobalSearchParams();
  const handleLoadDetail = (response) => {
    const responseData = response.data;
    const currentGroup = responseData.filter(
      (iteam) => iteam._id === params.id
    );

    setCurrentGroup(currentGroup);
  };
  useEffect(() => {
    sendRequest(
      {
        url: `http://10.194.65.21:3000/api/v1/groups`,
      },
      handleLoadDetail
    );
  }, []);
  if (isLoading) <ActivityIndicator size="large" color="#0000ff" />;

  if (currentGroupData)
    return <GroupDetail groupId={params.id} groupData={currentGroupData} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});

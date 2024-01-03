import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./hero.style";
import { useRouter } from "expo-router";
const LandingPage = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.heorcontainer}>
        <View
          style={{
            margin: 10,
          }}
        >
          <Text style={styles.heroTitle}>Study in group and level up</Text>
          <Text style={styles.heroDescription}>
            Studies have proved that studying in group is often more efficient ,
            so do not wait and start now
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/login")}
          style={styles.buttonContainer}
        >
          <Text style={styles.heroBtn}>Join Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imgContainer}>
        <Image
          style={styles.heroImg}
          source={require("../../assets/image/study.jpg")}
        />
      </View>
      <View style={styles.futureContainer}>
        <View style={styles.feedBackContainer}>
          <Text style={styles.feedback}>
            "This might be the secret of the 4.0 GPA"
          </Text>
          <View style={styles.featureText}>
            <Text style={styles.name}>HARVARD</Text>
            <Text style={styles.university}>UNIVERSITY</Text>
          </View>
        </View>
        <View style={styles.feedBackContainer}>
          <Text style={styles.feedback}>
            "The easy path to the rank 1 of your class"
          </Text>
          <View style={styles.featureText}>
            <Text style={styles.name}>PRINCETON</Text>
            <Text style={styles.university}>UNIVERSITY</Text>
          </View>
        </View>
        <View style={styles.feedBackContainer}>
          <Text style={styles.feedback}>
            "You'll see your grades skyrockected"
          </Text>
          <View style={styles.featureText}>
            <Text style={styles.name}>STANFORED</Text>
            <Text style={styles.university}>UNIVERSITY</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;

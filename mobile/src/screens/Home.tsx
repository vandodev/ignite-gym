import React from "react";
import { useState } from "react";
import { Center, HStack, VStack } from "native-base";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("antebraço");
  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <Group
          name="costas"
          isActive={groupSelected === "costa"}
          onPress={() => setGroupSelected("costa")}
        />
        <Group
          name="costas"
          isActive={groupSelected === "ombro"}
          onPress={() => setGroupSelected("ombro")}
        />
        <Group
          name="pernas"
          isActive={groupSelected === "pernas"}
          onPress={() => setGroupSelected("pernas")}
        />
      </HStack>
    </VStack>
  );
}

import React from "react";
import { Center, HStack, VStack } from "native-base";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <Group name="costas" isActive />
        <Group name="ombro" isActive={false} />
        {/* <Group name="pernas" isActive={true} /> */}
      </HStack>
    </VStack>
  );
}

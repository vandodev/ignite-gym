import React from "react";
import { VStack } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />
      <HistoryCard />
    </VStack>
  );
}

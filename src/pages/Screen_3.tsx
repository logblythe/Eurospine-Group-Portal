import { Container, Stack, Tabs } from "@mantine/core";
import { NoContact_NoParticipation } from "./Tabs/NoContact_NoParticipation";

import Header from "../component/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Screen_3() {
  const navigate = useNavigate();
  useEffect(() => {
    const userName = localStorage.getItem("uName");
    const password = localStorage.getItem("password");
    if (!userName || !password) {
      navigate("/login");
    }
  });
  return (
    <>
      <Header showSelectBox={false} />
      <Container mt={"10%"}>
        <Stack gap={"xl"}>
          <Tabs
            defaultValue="No Eurospine Account , No Participations"
            color="orange"
            radius={"xs"}
            variant="pills"
          >
            <Tabs.List
              grow
              style={{
                border: "2px solid orange",
              }}
            >
              <Tabs.Tab value="No Eurospine Account , No Participations">
                No Eurospine Account , No Participations
              </Tabs.Tab>
              <Tabs.Tab value="Eurospine Account Without PArticipation">
                Eurospine Account Without PArticipation
              </Tabs.Tab>
              <Tabs.Tab value="Eurospine Account With PArticipation">
                Eurospine Account With PArticipation
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="No Eurospine Account , No Participations">
              <NoContact_NoParticipation />
            </Tabs.Panel>

            <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

            <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
          </Tabs>
        </Stack>
      </Container>
    </>
  );
}

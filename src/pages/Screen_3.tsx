import { Container, Stack, Tabs } from "@mantine/core";
import { NoContact_NoParticipation } from "./Tabs/NoContact_NoParticipation";

import Header from "../component/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Contact_NoParticipation } from "./Tabs/Contact_NoParticipation";
import { Contact_participation } from "./Tabs/Contact_participation";

export function Screen_3() {
  const navigate = useNavigate();
  useEffect(() => {
    const userName = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (!userName || !password) {
      navigate("/login");
    }
  });
  return (
    <>
      <Header
        showSelectBox={false}
        onGroupSelect={function (id: string, name: string): void {
          throw new Error("Function not implemented.");
        }}
        dropdownOpened={false}
        loadingGroups={{}}
      />
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

            <Tabs.Panel value="Eurospine Account Without PArticipation">
              <Contact_NoParticipation />
            </Tabs.Panel>

            <Tabs.Panel value="Eurospine Account With PArticipation">
              <Contact_participation />
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Container>
    </>
  );
}

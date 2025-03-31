import { Button, Card, Container, List, Space, Stack } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export function Contact_NoParticipation() {
  const users = [
    "UserWithoutParticipationOnly 1",
    "UserWithoutParticipationOnly 2",
    "UserWithoutParticipationOnly 3",
    "UserWithoutParticipationOnly 4",
    "UserWithoutParticipationOnly 5",
  ];
  return (
    <>
      <Container bg={"lightgray"} mt={"2%"} p={"2%"}>
        <Stack gap={"xl"}>
          {users.map((user) => (
            <Card bg="white" w={"30%"}>
              <Space>{user}</Space>
            </Card>
          ))}
        </Stack>
      </Container>
      <Stack align="flex-end" mt={"5%"}>
        <Button bg={"orange"} rightSection={<IconArrowRight />}>
          Sync
        </Button>
      </Stack>
    </>
  );
}

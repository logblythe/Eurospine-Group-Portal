import { Button, Card, Container, List, Space, Stack } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export function NoContact_NoParticipation() {
  const users = [
    "UserWithoutContactAndParticipation 1",
    "UserWithoutContactAndParticipation 2",
    "UserWithoutContactAndParticipation 3",
    "UserWithoutContactAndParticipation 4",
    "UserWithoutContactAndParticipation 5",
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

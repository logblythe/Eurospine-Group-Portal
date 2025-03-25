import { Button, Card, Container, List, Space, Stack } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export function NoContact_NoParticipation() {
  const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
  return (
    <>
      <Container bg={"lightgray"} mt={"2%"} p={"2%"}>
        <Stack gap={"xl"}>
          {users.map((user) => (
            <Card bg="white" w={"20%"}>
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

import { Button, Select, Stack, Table } from "@mantine/core";

export function Screen_2() {
  const rows = Array(8).fill({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <>
      <Stack h={"100vh"} gap={"xl"} bg={"aliceblue"}>
        <Stack gap={"sm"} p={"xl"} pb={"md"}>
          <Stack align="flex-end">
            <Select
              w={"30vw"}
              bg={"white"}
              placeholder="SelectGroup"
              data={["React", "Angular", "Vue", "Svelte"]}
            />
          </Stack>
          <Table
            style={{
              borderRadius: "16px",
              overflow: "auto",
            }}
            bg={"white"}
            w={"90%"}
            m={"60px"}
            stickyHeader
            stickyHeaderOffset={60}
            captionSide="bottom"
            highlightOnHover
            striped
            verticalSpacing={"lg"}
          >
            <Table.Thead
              style={{
                fontWeight: "normal",
                fontSize: "14px",
                background: "lightgrey",
              }}
            >
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Td>Email</Table.Td>
                <Table.Td> Eurospine ID</Table.Td>
                <Table.Td>Participation ID</Table.Td>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {rows.map((index) => (
                <Table.Tr key={index}>
                  <Table.Td style={{ borderRight: "0.5px solid black" }}>
                    {""}
                  </Table.Td>
                  <Table.Td>{""}</Table.Td>
                  <Table.Td>{""}</Table.Td>
                  <Table.Td>{""}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Stack>
        <Stack align="flex-end" px={"xl"}>
          <Button bg={"red"}>Match Against Eurospine</Button>
        </Stack>
      </Stack>
    </>
  );
}

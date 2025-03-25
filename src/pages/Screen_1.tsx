import {
  Button,
  Checkbox,
  Flex,
  List,
  ListItem,
  ScrollArea,
  Select,
  Stack,
  Table,
} from "@mantine/core";
import { useListState } from "@mantine/hooks";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Screen_1() {
  useEffect(() => {
    const userName = localStorage.getItem("uName");
    const password = localStorage.getItem("password");
    if (!userName || !password) {
      navigate("/login");
    }
  });

  const rows = [
    {
      id: "1",
      firstName: "Amrita",
      lastName: "Maharjan",
      email: "a@gmail.com",
      remark: [],
      checked: false,
    },
    {
      id: "2",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      remark: ["pending", "failed"],
      checked: false,
    },
    {
      id: "3",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      remark: ["completed", "in progress"],
      checked: false,
    },
    {
      id: "4",
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      remark: [],
      checked: false,
    },
    {
      id: "5",
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      remark: ["pending"],
      checked: false,
    },
    {
      id: "6",
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@example.com",
      remark: ["started", "in progress", "completed"],
      checked: false,
    },
  ];
  const [values, handlers] = useListState(rows);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;
  const handleRowAddition = () => {
    handlers.setState([...values, ...rows]);
  };
  const navigate = useNavigate();
  const handlePageNavigation = () => {
    navigate("/Screen3");
  };
  return (
    <>
      <Stack h={"100vh"} gap={"xl"} bg={"aliceblue"}>
        <Header showSelectBox={true} />
        <Stack gap={"sm"} p={"xl"} pb={"md"}>
          <ScrollArea
            style={{
              height: "calc(100vh - 200px)",
              position: "relative",
            }}
          >
            <Table
              style={{
                borderRadius: "16px",
                overflow: "auto",
              }}
              bg={"white"}
              h={"calc(100vh - 220px"}
              w={"90%"}
              m={"60px"}
              mah={"50px"}
              mih={"20%"}
              stickyHeader
              stickyHeaderOffset={50}
              captionSide="bottom"
              highlightOnHover
              striped
              verticalSpacing={"lg"}
            >
              <Table.Thead
                style={{
                  background: "lightgrey",
                }}
              >
                <Table.Tr>
                  <Table.Th>
                    <Checkbox
                      checked={allChecked}
                      indeterminate={indeterminate}
                      onChange={() =>
                        handlers.setState((current) =>
                          current.map((value) => ({
                            ...value,
                            checked: !allChecked,
                          }))
                        )
                      }
                    ></Checkbox>
                  </Table.Th>
                  <Table.Th>Internal Id</Table.Th>
                  <Table.Td>First Name</Table.Td>
                  <Table.Td> Last Name</Table.Td>
                  <Table.Td>Email Address</Table.Td>
                  <Table.Td>Remarks</Table.Td>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {values.map((row, index) => (
                  <Table.Tr key={row.id}>
                    <Table.Td style={{ borderRight: "0.5px solid black" }}>
                      {row.remark && row.remark.length > 0 ? (
                        <Checkbox disabled checked onChange={() => {}} />
                      ) : (
                        <Checkbox
                          disabled
                          checked={row.checked}
                          onChange={(event) =>
                            handlers.setItemProp(
                              index,
                              "checked",
                              event.currentTarget.checked
                            )
                          }
                        ></Checkbox>
                      )}
                    </Table.Td>
                    <Table.Td>{row.id}</Table.Td>
                    <Table.Td>{row.firstName}</Table.Td>
                    <Table.Td>{row.lastName}</Table.Td>
                    <Table.Td>{row.email}</Table.Td>
                    <List>
                      {row.remark.map((tag) => (
                        <ListItem>{tag}</ListItem>
                      ))}
                    </List>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Stack>
        <Flex align="flex-end" justify={"flex-end"} gap={"lg"} px={"xl"}>
          <Button bg={"red"} onClick={handleRowAddition}>
            Add table data
          </Button>
          <Button bg={"red"} onClick={handlePageNavigation}>
            Match Against Eurospine
          </Button>
        </Flex>
      </Stack>
    </>
  );
}

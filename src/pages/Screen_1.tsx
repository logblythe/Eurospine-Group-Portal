import {
  Button,
  Checkbox,
  Container,
  Flex,
  List,
  ListItem,
  Loader,
  ScrollArea,
  Stack,
  Table,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchData } from "../api/api-client";
import { groupMembersById } from "../api/api-url";
import Header from "../component/Header";
import { IndividualMember } from "../../types/IndividualMember";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function Screen_1() {
  const navigate = useNavigate();
  const [groupMembers, setGroupMembers] = useState<IndividualMember[]>([]);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [groupId, setGroupId] = useState("");
  const [loading, setIsLoading] = useState("false");
  useEffect(() => {
    const userName = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (!userName || !password) {
      navigate("/login");
    }
  }, [navigate]);

  // const fetchGroupMemberById = useCallback(
  //   async (contactId: string): Promise<void> => {
  //     if (!contactId) return;
  //     try {
  //       const result = await fetchData<IndividualMember[]>(
  //         groupMembersById(contactId)
  //       );
  //       setGroupMembers(result);
  //     } catch (error) {
  //       console.error("Error fetching group members:", error);
  //     }
  //   },
  //   []
  // );

  // useEffect(() => {
  //   fetchGroupMemberById(groupId);
  // }, [fetchGroupMemberById]);
  const fetchGroupMembers = async (
    groupId: string
  ): Promise<IndividualMember[]> => {
    if (!groupId) return [];
    try {
      return await fetchData<IndividualMember[]>(groupMembersById(groupId));
    } catch (error) {
      console.error("Error fetching group members:", error);
      return [];
    }
  };

  const {
    isLoading,

    data: fetchedGroupMembers = [],
  } = useQuery({
    queryKey: ["groupMembers", groupId],
    queryFn: () => fetchGroupMembers(groupId),
    enabled: !!groupId,
  });

  const allSelected =
    selectedRowIds.length === fetchedGroupMembers.length &&
    fetchedGroupMembers.length > 0;
  const someSelected =
    selectedRowIds.length > 0 &&
    selectedRowIds.length < fetchedGroupMembers.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(groupMembers.map((member) => member.id));
    }
  };

  const toggleRowSelection = (id: string) => {
    setSelectedRowIds((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handlePageNavigation = () => {
    navigate("/Screen3");
  };

  return (
    <Stack h="100vh" w="100vw" bg="aliceblue">
      <Header
        showSelectBox
        onGroupSelect={(id: string, name: string) => {
          setGroupId(id);
          // fetchGroupMemberById(id);
        }}
        dropdownOpened={false}
        loadingGroups={{}}
      />
      <Container w="90vw" mt="90px">
        <Stack gap="xl">
          <ScrollArea
            style={{
              height: "calc(90vh - 200px)",
              position: "relative",
              overflow: "auto",
            }}
          >
            <Table
              style={{ borderRadius: "16px", overflow: "auto" }}
              bg="white"
              h="calc(100vh - 220px)"
              striped
              highlightOnHover
            >
              <Table.Thead style={{ background: "lightgrey" }}>
                <Table.Tr>
                  <Table.Th>
                    <Checkbox
                      checked={allSelected}
                      indeterminate={someSelected}
                      onChange={toggleSelectAll}
                    />
                  </Table.Th>
                  <Table.Th>Internal Id</Table.Th>
                  <Table.Th>First Name</Table.Th>
                  <Table.Th>Last Name</Table.Th>
                  <Table.Th>Email Address</Table.Th>
                  <Table.Th>Remarks</Table.Th>
                </Table.Tr>
              </Table.Thead>
              {isLoading ? (
                <Loader></Loader>
              ) : (
                <Table.Tbody>
                  {fetchedGroupMembers.map((row: IndividualMember) => (
                    <Table.Tr key={row.id}>
                      <Table.Td>
                        <Checkbox
                          checked={selectedRowIds.includes(row.id)}
                          onChange={() => toggleRowSelection(row.id)}
                        />
                      </Table.Td>
                      <Table.Td>{row.id}</Table.Td>
                      <Table.Td>{row.firstName}</Table.Td>
                      <Table.Td>{row.lastName}</Table.Td>
                      {/* <Table.Td>{row.email}</Table.Td> */}
                      <Table.Td>
                        {/* <List>
                        {row.remark.map((tag, i) => (
                          <ListItem key={i}>{tag}</ListItem>
                        ))}
                      </List> */}
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              )}
            </Table>
          </ScrollArea>

          <Flex justify="flex-end" align="flex-end" gap="lg" px="xl">
            <Button bg="red" onClick={handlePageNavigation}>
              Match Against Eurospine
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Stack>
  );
}

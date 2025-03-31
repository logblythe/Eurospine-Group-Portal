import {
  Button,
  Container,
  Group,
  Loader,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      uName: "",
      password: "",
    },
    validate: {
      uName: (value: string) => (!value ? "Invalid username" : null),
      password: (value: string) => (!value ? "Invalid password" : null),
    },
  });

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const mutation = useMutation({
    mutationFn: async (values: { uName: string; password: string }) => {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.uName,
          password: values.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials!");
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        return response.text();
      }
    },
    onSuccess: (data, variables) => {
      localStorage.setItem("username", variables.uName);
      localStorage.setItem("password", variables.password);
      navigate("/Screen1");
      notifications.show({
        color: "green",
        title: "Success",
        message: "Logged in successfully!",
      });
    },
    onError: (error) => {
      notifications.show({
        color: "red",
        title: "Error",
        message: error.message || "Login failed!",
      });
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleSubmit = (values: { uName: string; password: string }) => {
    mutation.mutate(values);
  };

  return (
    <Container
      bg={"aliceblue"}
      h={"100vh"}
      w={"100vw"}
      maw={"100vw"}
      pt={"10%"}
    >
      <Container
        h={400}
        bg={"white"}
        w={600}
        m="auto"
        p="xl"
        style={{ borderRadius: "16px" }}
      >
        <Stack>
          <Title order={1}>Sign in to your account</Title>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap={"lg"}>
              <TextInput
                label="Enter your username"
                radius="md"
                placeholder="Enter your username"
                key={form.key("uName")}
                {...form.getInputProps("uName")}
              />
              <PasswordInput
                label="Enter your password"
                radius="md"
                placeholder="Enter your password"
                key={form.key("password")}
                {...form.getInputProps("password")}
              />
              <Group justify="flex-end" mt="md">
                <Button
                  type="submit"
                  rightSection={
                    isLoading ? <Loader color="white" size={15} /> : null
                  }
                  fullWidth
                >
                  Log in
                </Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Container>
  );
}

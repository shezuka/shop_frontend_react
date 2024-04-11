"use client";

import React, { FormEvent } from "react";
import InputField from "@/app/_components/InputField";
import BlockTitle from "@/app/_components/BlockTitle";
import Block from "@/app/_components/Block";
import BlockBody from "@/app/_components/BlockBody";
import Button from "@/app/_components/Button";
import axios from "@/app/_utils/axios";
import { redirect, useRouter } from "next/navigation";
import checkAdminToken from "@/app/_lib/checkAdminToken";
import { StoreAccessToken } from "@/app/_lib/UserToken";

export default function AdminLoginPage() {
  const router = useRouter();

  const [tokenVerified, setTokenVerified] = React.useState(false);

  // username and password states
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      if (res.status === 200) {
        StoreAccessToken(res.data.key);
        router.push("/admin/dashboard");
      }
    } catch (e: any) {
      console.error(e);
      if (
        e &&
        e.response &&
        e.response.status >= 400 &&
        e.response.status < 500
      ) {
      } else {
      }
    }
  };

  React.useEffect(() => {
    let cancel = false;

    checkAdminToken().then((isValid) => {
      if (cancel) return;

      setTokenVerified(true);
      if (isValid) {
        redirect("/admin/dashboard");
      }
    });

    return () => {
      cancel = true;
    };
  }, []);

  if (!tokenVerified) return null;
  return (
    <Block>
      <BlockTitle>Sign in</BlockTitle>
      <BlockBody>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Username"
            name="email"
            type="text"
            autoComplete="username"
            required
            className="text-violet-900"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            required
            className="text-violet-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </BlockBody>
    </Block>
  );
}

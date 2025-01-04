import React from "react";
import Navbar from "./Navbar";
import { createClient } from "../utils/supabase/server";

export default async function Navigation() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <Navbar user={user} />
    </div>
  );
}

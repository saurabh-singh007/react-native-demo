import { Redirect } from "expo-router";
// import { useAuth } from "@/hooks/useAuth"; // however you track auth state

export default function Index() {
  return  <Redirect href="/(tabs)"  />;
}
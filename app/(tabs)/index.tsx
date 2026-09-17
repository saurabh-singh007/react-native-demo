import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
    {/* // <View className="flex-1 items-center justify-center bg-white"> */}
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={"/(auth)/signUp"} className=" mt-4 bg-black text-white rounded-full p-4">Sign Up</Link>
       <Link href={"/(auth)/signIn"} className=" mt-4 bg-black text-white rounded-full p-4">Sign In</Link>
      
      
    {/* // </View> */}
    </SafeAreaView>
  );
}
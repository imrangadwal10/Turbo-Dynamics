import { ChakraProvider } from "@chakra-ui/react";
import Chat from "../Components/Navbar/Chat";
import Navbar from "../Components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Chat />
    </ChakraProvider>
  );
}

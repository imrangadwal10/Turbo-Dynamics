
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar"
import {store} from "../redux/store"
import { Provider } from 'react-redux';
 import Chat from "../Components/Navbar/Chat";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Chat />
    </ChakraProvider>
    </Provider>
  );
}

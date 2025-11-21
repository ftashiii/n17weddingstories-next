import "../styles/globals.css";
import { LocaleProvider } from "../lib/LocaleContext.js";
export default function App({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}

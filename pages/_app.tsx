import { CvFormProvider } from "@/contexts/CvFormContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>harbaaCv - إنشاء سيرة ذاتية احترافية بصيغة PDF مجانًا</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider>
        <CvFormProvider>
          <Component {...pageProps} />
        </CvFormProvider>
      </Provider>
    </>
  );
}


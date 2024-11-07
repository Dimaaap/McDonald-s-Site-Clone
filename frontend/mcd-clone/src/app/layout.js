import { MainHeader } from "@/components";
import { Roboto } from "next/font/google"


const roboto = Roboto({
  subsets: ["cyillic"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ roboto.className }
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

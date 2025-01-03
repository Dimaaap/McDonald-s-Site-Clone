import { MainHeader } from "@/components";
import { Nunito } from "next/font/google"


const nunito = Nunito({
  subsets: ["cyillic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ nunito.className }
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

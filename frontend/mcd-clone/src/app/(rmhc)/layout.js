import { Nunito } from "next/font/google"
import "../globals.css"
import { RMHSMainHeader } from "@/components";


const nunito = Nunito({
  subsets: ["cyillic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"]
})


export default function RMHSLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ nunito.className }
      >
        <RMHSMainHeader />
        {children}
      </body>
    </html>
  );
}

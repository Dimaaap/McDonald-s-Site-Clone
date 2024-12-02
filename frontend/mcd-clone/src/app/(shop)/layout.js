import { Nunito } from "next/font/google"
import "../globals.css"
import { ShopMainHeader, ShopMainFooter } from "@/components";


const nunito = Nunito({
  subsets: ["cyillic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"]
})


export default function ShopLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ nunito.className }
      >
        <ShopMainHeader />
        {children}
        <ShopMainFooter />
      </body>
    </html>
  );
}

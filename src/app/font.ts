import { Roboto, Public_Sans } from "next/font/google";

const TitleFont = Roboto({ subsets: ["latin"], weight: "900" });
const SubTitleFont = Roboto({ subsets: ["latin"], weight: "700" });
const ContentFont = Public_Sans({ subsets: ["latin"], weight: "400" });

export { TitleFont, SubTitleFont, ContentFont };
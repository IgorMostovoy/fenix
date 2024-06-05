import { Poiret_One, Montserrat, Marck_Script } from "next/font/google";

export const poiret = Poiret_One({
  weight: ["400"],
  style: "normal",
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--poiretOne-font",
});

export const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--montserrat-font",
});

export const marckScript = Marck_Script({
  weight: ["400"],
  style: "normal",
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--marckScript-font",
});

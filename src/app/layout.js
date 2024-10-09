import Footer from "@/components/organisms/footer/footer";
import Header from "@/components/organisms/header/header";
import StyledComponentsRegistry from "@/lib/registry";
import Theme from "@/lib/theme";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../assets/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const concertOne = localFont({
  src: "../assets/font/ConcertOne.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-concertone",
});

export const metadata = {
  title: "서재완 포트폴리오",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${concertOne.variable}`}>
        <StyledComponentsRegistry>
          <Theme>
            <Header />
            {children}
            <Footer />
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

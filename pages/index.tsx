import { Inter } from "next/font/google";
import Image from "next/image";
import swIcon from "../public/sw.svg";
import home from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={home.container}>
      <h1 className={home.title}>
        Create your own deck of Star Wars characters
      </h1>
      <Image className={home.image} src={swIcon} alt="Star Wars logo" />
    </div>
  );
}

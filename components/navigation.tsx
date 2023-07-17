import Link from "next/link";
import navigation from "./navigation.module.css";

const Navigation = ({ currentPath }: { currentPath: string }) => {
  return (
    <div className={navigation.container}>
      <Link
        className={
          navigation.link +
          " " +
          (currentPath === "/deck" ? navigation.active : "")
        }
        href={`/deck`}
      >
        Decks
      </Link>
      <Link
        className={
          navigation.link +
          " " +
          (currentPath === "/deck/new" ? navigation.active : "")
        }
        href={`/deck/new`}
      >
        Create deck
      </Link>
    </div>
  );
};

export default Navigation;

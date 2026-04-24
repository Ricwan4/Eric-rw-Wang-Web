import FileSystemBash, { FileSystemType } from "../fileSystemBash";

export default function persona(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fs = FileSystemBash();
  const docs = {
    name: "persona",
    short: "Send a calling card",
    long: "Send a calling card to steal someone's heart.",
  };

  const app = (args: string[], options: string[]) => {
    const card = `
-----------------------------------
      _______
     |       |   TAKE YOUR
     |_______|    HEART!
    (_________)
   /_/_/_/_/_/_/
  
From: The Phantom Thieves of Hearts
-----------------------------------`;

    print(card);
    fs.make(path.p, "CALLING_CARD.md", "file");
  };

  return { docs, app };
}
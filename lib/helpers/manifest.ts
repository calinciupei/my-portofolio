import { join } from "path";
import { promises, existsSync } from "fs";

export default async function getManifest(): Promise<string | unknown> {
  let assets;
  const distFunctions = join(__dirname, "../../../../public");
  const dist = join(__dirname, "../../../public");

  try {
    if (existsSync(`${dist}/manifest.json`)) {
      assets = promises.readFile(`${dist}/manifest.json`, "utf-8");
    } else {
      assets = promises.readFile(`${distFunctions}/manifest.json`, "utf-8");
    }

    return assets;
  } catch (e) {
    return e;
  }
}

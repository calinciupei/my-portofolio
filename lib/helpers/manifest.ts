import { join } from "path";
import { promises } from "fs";

export default async function getManifest(): Promise<string | unknown> {
  const dist = join(__dirname, "../../../public");

  try {
    const assets = promises.readFile(`${dist}/manifest.json`, "utf-8");

    return assets;
  } catch (e) {
    return e;
  }
}

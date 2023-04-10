import * as path from "path";
import { rmdir } from "./ls/asyncUtil";

import { cpDir } from "./ls/cpDir";
import { excuse } from "./ls/exec";
import { clear } from "./ls/rm";

const packagePath = `/Users/zsy/Documents/zsy/test/taro-solidjs/plugin-framework-solid`;
const src = path.resolve(packagePath, "dist");
const dist_project =
  "/Users/zsy/Documents/zsy/test/taro-solidjs/minapp-solid-test";
const taro_tmp = path.resolve(dist_project, "node_modules/.taro");
const dist_package = path.resolve(
  dist_project,
  "node_modules/@tarojs/plugin-framework-react/dist"
);

async function main() {
  await excuse("yarn build", { path: packagePath, output: true });
  console.log(`status:> yarn dev success!`, dist_package, taro_tmp);
  await clear(taro_tmp);
  await clear(dist_package);
  await cpDir(src, dist_package);
  console.log(`status:> sync calendar success!`);
}
main();

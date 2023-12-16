import { glob } from "glob";
import { resolve } from "path";

export function viteHtmlOreder(options = {}): any {
  let config: any;

  return {
    name: "viteHtmlOreder",

    async configResolved(_config: any) {
      config = _config;

      const inputs: any = {};

      const documents: any = glob.sync(`${config.root}/**/*.html`, { ignore: "node_modules/**" });

      const rollupOptions = config.build.rollupOptions;

      documents.forEach((document: any) => {
        const fileName = document.replace(`${config.root}/`, "");
        const key = fileName.replace("index.html", "main").replace("/main", "");

        inputs[key] = resolve(__dirname, `${config.root}/${fileName}`);

        rollupOptions.input = { ...inputs };
      });
    },
  };
}

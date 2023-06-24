import { glob } from "glob";

export function ViteHtmlLoader(options = {}): any {
  let config: any;

  return {
    name: "ViteHtmlOreder",

    async configResolved(_config: any) {
      config = _config;

      const inputs: any = {};

      const documents: any = glob.sync(`${config.root}/**/*.html`, { ignore: "node_modules/**" });

      const rollupOptions = config.build.rollupOptions;

      documents.forEach((document: any) => {
        const fileName = document.replace(`${config.root}/`, "");
        const key = fileName.replace("index.html", "main").replace("/main", "");

        inputs[key] = `${config.root}/${fileName}`;

        rollupOptions.input = { ...inputs };
      });
    },
  };
}

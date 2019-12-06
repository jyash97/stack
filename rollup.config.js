import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
      {
        name: "searchbox",
        file: pkg.browser,
        format: "umd"
      }
    ],
    plugins: [
      commonjs(),
      babel({
        exclude: "node_modules/**",
        extensions: [".js"]
      })
    ]
  }
];

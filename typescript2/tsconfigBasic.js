// another way of configuring typescript compiler
{
  "compilerOptions": {
    "target": "es6",
    // store result of the compiling 'js file' in this folder - 'dist'
    // outDir - path to the folder
    "outDir": "dist"
  },
  // files that we would like to compile using 'include' option
  // using globe patterns here, compiling all the ts files in our dirs & sub-dirs
  // ** - any sub-folder
  // * - any file name
  "include": ["**/*.ts"]
}

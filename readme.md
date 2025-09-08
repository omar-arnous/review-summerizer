### format code from terminal before commiting the code

1. install the package using: bun add -d prettier
2. make the .prettierrc file and add your definitions
3. in package.json make a script by adding the follow in it: "format": "prettier --write ."

### Automate flow using Husky [Husky](https://typicode.github.io/husky/get-started.html)

1. install the package and initialize it
2. install lint-staged by using: bin add -d lint-staged
3. in .husky we have a pre-commit files
4. add in the file: bunx lint-staged
5. at the root make a new file lintstagedrc
6. add the following line in carly braces: "\*.{,js,jsx,ts,tsx,css}": "prettier --write"

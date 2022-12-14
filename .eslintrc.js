module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/typescript"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "comma-style": ["error", "last"],
        "indent": ["error", 4],
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    }
};

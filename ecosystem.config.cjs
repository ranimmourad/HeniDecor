module.exports = {
  apps: [
    {
      name: "heni-decor",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000 -H 0.0.0.0",
      cwd: "/home/user/webapp/heni-decor",
      env: { NODE_ENV: "production", PORT: 3000 },
      watch: false,
      instances: 1,
      exec_mode: "fork",
    },
  ],
};

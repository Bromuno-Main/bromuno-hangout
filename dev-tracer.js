process.on("exit", (code) => console.log(`⛔️ Exit with code: ${code}`));
process.on("SIGINT", () => console.log("✋ SIGINT received"));
process.on("uncaughtException", err => {
    console.error("🔥 Uncaught Exception:", err);
});
process.on("unhandledRejection", err => {
    console.error("🔥 Unhandled Rejection:", err);
});
require("next/dist/bin/next");

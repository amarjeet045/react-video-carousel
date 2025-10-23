import "./commands.js";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test

  if (
    err.message.includes("Unknown error") ||
    err.message.includes("AuthApiError")
  ) {
    return false;
  }
  return true;
});

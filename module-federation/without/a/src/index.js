(async () => {
  import("common");

  const b = await import("b");
  console.log(b.default);
})();

(async () => {
  import("remote_name_common/module_name");

  const b = await import("remote_name_b/module_name");
  console.log(b.default);
})();

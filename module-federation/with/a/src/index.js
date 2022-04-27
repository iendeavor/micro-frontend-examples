import('remote_name_b/module_name');

(async () => {
  const common = (await import("remote_name_common/module_name")).default;
  console.log(common)
})()

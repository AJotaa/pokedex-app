export const useIds = () => {
  const itemsNum = 905;

  function getId(value) {
    let dataIds;
    if (Array.isArray(value)) {
      dataIds = value
        ?.map((e) => e.split("/").reverse()[1])
        .filter((e) => {
          return e <= itemsNum;
        });
    } else if (typeof value === "string") {
      dataIds = value.split("/").reverse()[1];
    }
    return dataIds;
  }

  return { getId };
};

export const apiFuncArray = {
  api1Func: (node, inputData) => {
    const data = node.getData();
    node.setData({
      ...data,
      status: "running",
    });
    setTimeout(() => {
      console.log("api1Func", inputData);
      node.setData({
        ...data,
        status: "success",
      });
    }, 1000);
    return data;
  },
  api2Func: (node, inputData) => {
    const data = node.getData();
    node.setData({
      ...data,
      status: "running",
    });
    setTimeout(() => {
      console.log("api2Func", inputData);
      node.setData({
        ...data,
        status: "success",
      });
    }, 1000);
    return data;
  },
};

export const apiFuncLabel = [
  {
    label: "api1Func",
    value: "api1Func",
  },
  {
    label: "api2Func",
    value: "api2Func",
  },
];

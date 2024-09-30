export default [
  {
    url: "/api/v2/user-selections",
    method: "get",
    response: ({ query }) => {
      return {
        message: `You selected ${query.selected}`,
        timestamp: new Date().toISOString(),
      };
    },
  },
];

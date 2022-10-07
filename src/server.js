import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    timing: 15000,

    routes() {
      this.namespace = "api";

      this.get(
        "/btc",
        () => {
          return [{ price: "$19,975", type: "increased" }];
        },
        { timing: 10000 }
      );
    },
  });

  return server;
}

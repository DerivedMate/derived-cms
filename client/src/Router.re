type url = {
  path: list(string),
  hash: string,
  search: string,
};

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <Layout>
    {switch (url.path) {
     | [] => <Pages__Index />
     | _ => <Pages__404 path={url.path} />
     }}
  </Layout>;
};
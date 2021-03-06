open JMySon;

let textUnder = () =>
  <p className="auth__form__text">
    "Already have an account?"->Helpers.str
    <br />
    <a href="/auth/signin" className="auth__form__text__link">
      "Login here!"->Helpers.str
    </a>
  </p>;

[@react.component]
let make = () => {
  <AuthLayout
    title="signup"
    textUnder
    onSubmit={e => {
      let username: string = e->ReactEvent.Form.currentTarget##username##value;
      let email: string = e->ReactEvent.Form.currentTarget##email##value;
      let password: string = e->ReactEvent.Form.currentTarget##password##value;
      let repeat_password: string =
        e->ReactEvent.Form.currentTarget##repeat_password##value;

      ignore(
        Js.Promise.(
          (Helpers.Location.origin ++ "/auth/signup")
          ->Fetch.fetchWithInit(
              Fetch.RequestInit.make(
                ~method_=Post,
                ~body=
                  Encode.reg_user(
                    ~username,
                    ~email,
                    ~password,
                    ~repeat_password,
                  )
                  |> Json.stringify
                  |> Fetch.BodyInit.make,
                ~headers=
                  Fetch.HeadersInit.make({
                    "Content-Type": "application/json",
                  }),
                (),
              ),
            )
          |> then_(Fetch.Response.json)
          |> then_(x => x |> Decode.auth_response |> resolve)
          |> then_(r => {
               r |> Js.Console.log;
               ReasonReactRouter.push("/");
               r |> resolve;
             })
        ),
      );
      ();
    }}
    btnValue="Signup">
    <Form__Input
      name="username"
      label="username"
      type_="text"
      placeholder="username"
    />
    <Form__Input
      label="e-mail"
      type_="email"
      placeholder="email@derivative.com"
      name="email"
    />
    <Form__Input
      label="password"
      type_="password"
      placeholder="password"
      name="password"
    />
    <Form__Input
      label="repeat password"
      type_="password"
      placeholder="repeat password"
      name="repeat_password"
    />
  </AuthLayout>;
};
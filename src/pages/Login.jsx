import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Login() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    console.log({ email, password });
  };
  return (
    <div className="flex flex-col max-w-[40vw]">
      <h1 className="text-emerald-500 text-3xl font-black text-center">
        Faça login no ScreenFast!
      </h1>

      <form
        action={"POST"}
        onSubmit={handleSubmit}
        className="flex flex-col content-center p-6 border border-gray-200 bg-zinc-100"
      >
        <label
          htmlFor="emailInput"
          id="email_Label"
          className="text-md text-zinc-400 font-regular py-1"
        >
          Email
        </label>
        <input
          id="emailInput"
          type={"email"}
          placeholder="Digite o email do Usuário"
          aria-labelledby="email_Label"
          name="email"
          className=" border border-zinc-300 py-1 rounded-md placeholder:pl-2 max-w-[384px]"
        />
        <label
          className="text-md text-zinc-400 font-regular py-1"
          htmlFor="passwordInput"
          id="password_Label"
        >
          Password
        </label>
        <input
          id="passwordInput"
          type={"password"}
          placeholder="Digite o password do Usuário"
          aria-labelledby="password_Label"
          name="password"
          className=" border border-zinc-300 py-1 rounded-md placeholder:pl-2 max-w-[384px]"
        />
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="bg-emerald-500 active:opacity-80 text-zinc-50 py-1 mt-6 w-32 rounded-md"
          >
            Fazer Login
          </button>
          <p>ou faça login com sua conta google</p>
          <button><FontAwesomeIcon icon={"google"}/></button>
        </div>
      </form>
    </div>
  );
}
export default Login;

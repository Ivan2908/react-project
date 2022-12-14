import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import FormClient from "../components/FormClient";
import Errors from "../components/Errors";
import { addNewCliente } from "../data/clients";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  // Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es valido");
  }

  if (Object.keys(errores).length) {
    return errores;
  }

  await addNewCliente(datos);

  return redirect("/");
}

function NewClient() {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"> Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente.
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        >
          Voler
        </button>
      </div>

      <div className="bg-white shadow round-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Errors key={i}>{error}</Errors>)}
        <Form method="post" noValidate>
          <FormClient />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Nuevo Cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default NewClient;

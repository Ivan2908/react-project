import { obtainOneClient } from "../data/clients";
import FormClient from "../components/FormClient";
import { Form, useNavigate, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const client = await obtainOneClient(params.clienteId);
  if (Object.keys(client).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "El cliente no fue encontrado",
    });
  }
  return client;
}

function EditClient() {
  const navigate = useNavigate();
  const client = useLoaderData();
  console.log(client);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"> Editar Cliente</h1>
      <p className="mt-3">Puedes modificar cualqueir dato.</p>

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
        {/* {errores?.length &&
          errores.map((error, i) => <Errors key={i}>{error}</Errors>)} */}
        <Form method="post" noValidate>
          <FormClient client={client} />

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

export default EditClient;

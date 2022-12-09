import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const { message, statusText } = error;
  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
        CRM -CLIENTE
      </h1>
      <p className="text-center">Hubo un Error</p>
      <p className="text-center">{message || statusText}</p>
    </div>
  );
}

export default ErrorPage;

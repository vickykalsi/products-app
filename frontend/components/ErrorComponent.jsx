import { useRouteError } from "react-router-dom";

function ErrorComponent(){
  const error=useRouteError();
  return <h1>error : {error.message}</h1>
}

export default ErrorComponent;
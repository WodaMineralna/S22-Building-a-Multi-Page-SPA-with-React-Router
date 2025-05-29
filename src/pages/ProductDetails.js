import { useParams, Link } from "react-router-dom";

export default function ProductDetailsPage() {
  const params = useParams();

  return (
    <>
      <h3>{params.id}</h3>
      <Link to=".." relative="path">
        <button>Go back</button>
      </Link>
    </>
  );
}

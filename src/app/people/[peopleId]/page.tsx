export const runtime = "edge";

async function getPeople(id: string): Promise<{ name: string }> {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  return data;
}

async function PeopleDetail({ params }: { params: { peopleId: string } }) {
  const { peopleId } = params;
  const people = await getPeople(peopleId);

  return <h1>Hi 👋🏻 {people.name}</h1>;
}

export default PeopleDetail;

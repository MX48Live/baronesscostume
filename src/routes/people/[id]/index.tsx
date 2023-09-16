import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const usePeople = routeLoader$(async (req) => {
  const res = await fetch(`https://swapi.dev/api/people/${req.params.id}/`);
  const data = await res.json();
  return {
    name: data.name,
  };
});

export default component$(() => {
  const people = usePeople();

  return (
    <>
      <h1>Hi 👋: {people.value.name}</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "People",
};

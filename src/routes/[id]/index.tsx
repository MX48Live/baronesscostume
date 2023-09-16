import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const useMyData = routeLoader$(async (req) => {
  const { id } = req.params;
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  const data = await res.json();
  return data;
});

export default component$(() => {
  const data = useMyData();
  return (
    <>
      <h1>Hi 👋 {data.value.name}</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

import React from "react";
import { render } from "@testing-library/react";
import { Content } from ".";

test("Renders my name", () => {
  const { getByText } = render(<Content />);
  const nameElement = getByText(/Hi, I'm Dan Frenette/);
  expect(nameElement).toBeInTheDocument();
});
//
// test("Renders a link to Instagram", () => {
//   const { getByClassName } = render(<Content />);
//   const instagramElement = getByClassName(/fa instagram/);
//
//   expect(instagramElement.href).toBe("https://www.instagram.com/")
// });

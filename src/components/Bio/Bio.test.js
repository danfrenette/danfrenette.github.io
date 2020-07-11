import React from "react";
import { render } from "@testing-library/react";
import { Bio } from ".";

test("Renders my name", () => {
  const { getByText } = render(<Bio />);
  const nameElement = getByText(/Hi, I'm Dan Frenette/);

  expect(nameElement).toBeInTheDocument();
});

test("Renders a link to my GitHub profile", () => {
  const { getByTestId } = render(<Bio />);
  const githubElement = getByTestId("github-link");

  expect(githubElement.href).toBe("https://www.github.com/danfrenette")
});

test("Renders a link to my Linkedin profile", () => {
  const { getByTestId } = render(<Bio />);
  const linkedinElement = getByTestId("linkedin-link");

  expect(linkedinElement.href).toBe("https://www.linkedin.com/in/danfrenette")
});

test("Renders a link to my email", () => {
  const { getByTestId } = render(<Bio />);
  const emailElement = getByTestId("email-link");

  expect(emailElement.href).toBe("mailto:dan.r.frenette@gmail.com")
});

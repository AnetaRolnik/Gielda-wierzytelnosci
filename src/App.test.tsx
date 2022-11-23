import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

const dummyData = [
  {
    Id: 1,
    Name: "Jan Nowak",
    Value: 10000.0,
    NIP: "1112223301",
    Date: new Date("2017-03-01T00:00:00"),
  },
  {
    Id: 2,
    Name: "Aneta Kapciak",
    Value: 4000.0,
    NIP: "1112223302",
    Date: new Date("2017-03-30T00:00:00"),
  },
  {
    Id: 3,
    Name: "Stanisław Urbański",
    Value: 1000.0,
    NIP: "1112223305",
    Date: new Date("2017-02-03T00:00:00"),
  },
];

describe("App", () => {
  test("shows information if no data", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [],
    }) as jest.Mock;

    render(<App />);

    const emptyStateInfo = await screen.findByText(
      "Brak wyników. Spróbuj wpisać inny NIP lub nazwę dłużnika."
    );
    expect(emptyStateInfo).toBeInTheDocument();
  });

  test("shows the table if data", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => dummyData,
    }) as jest.Mock;

    render(<App />);

    const table = await screen.findByRole("table");
    expect(table).toBeInTheDocument();
  });

  test("checks if the table is sorted in ascending order by name", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => dummyData,
    }) as jest.Mock;

    render(<App />);

    const names = await screen.findAllByTestId("name-column");

    expect(names[0]).toHaveTextContent("Aneta Kapciak");
    expect(names[1]).toHaveTextContent("Jan Nowak");
    expect(names[2]).toHaveTextContent("Stanisław Urbański");
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
    render(<BoxList />)
});

it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

//used solution for help with this
it("should add new item", function() {
    const boxList = render(<BoxList/>)
    const width = boxList.getByLabelText("Box Width:")
    const height = boxList.getByLabelText("Box Height:")
    const color = boxList.getByLabelText("Box Color:")

    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(color, { target: { value: 'blue' } });
    fireEvent.change(width, { target: { value: 200 } });
    fireEvent.change(height, { target: { value: 200 } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);

    expect(boxList.queryByText("X")).toBeInTheDocument();
});

it("should remove an item", function() {
    const boxList = render(<BoxList/>)
    const width = boxList.getByLabelText("Box Width:")
    const height = boxList.getByLabelText("Box Height:")
    const color = boxList.getByLabelText("Box Color:")

    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(color, { target: { value: 'blue' } });
    fireEvent.change(width, { target: { value: 200 } });
    fireEvent.change(height, { target: { value: 200 } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);

    expect(boxList.queryByText("X")).toBeInTheDocument();
    const removeBtn = boxList.getByText("X");
    fireEvent.click(removeBtn);
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
})
import React from "react"
import { create } from "react-test-renderer"
import StatusProfileHOOC from "./StatusProfileHOOC"

describe("ProfileStatus component", ()=>{
  test("after creation span should be displayed with correct status", ()=>{
    const component = create(<StatusProfileHOOC />);
    const root = component.root;
    let span = root.findAllByType("span")
    expect(span.length).not.toBeNull();
  });

  test("after creation input shouldn't be displayed", ()=>{
    const component = create(<StatusProfileHOOC />);
    const root = component.root;
    expect(()=>{
      //If you don't saw input, you sow error
      let input = root.findByType("input");
    }).toThrow();
  });
});
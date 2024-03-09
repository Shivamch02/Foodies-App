import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResList.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search resList for KFC input", async ()=>{
    await act( async ()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })


    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "KFC"}});

    fireEvent.click(searchBtn);
1
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);

    expect(searchBtn).toBeInTheDocument();
})


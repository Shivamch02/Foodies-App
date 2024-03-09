import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should load a header component with a login button", ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        )
        const loginButton = screen.getByRole("button", {name: "Login"});
        // const loginButton = screen.getByText("Login");

        expect(loginButton).toBeInTheDocument();
    }) 

    it("should render header component with cart items", ()=>{

        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
            )
            const cartItems = screen.getByText("Cart (0 items)");
    
            expect(cartItems).toBeInTheDocument();
        }) 


    it("should render header component with cart item", ()=>{

        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
            )
            const cartItems = screen.getByText(/Cart/);
    
            expect(cartItems).toBeInTheDocument();
        }) 

        it("should change login button to logout on click", ()=>{

            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header/>
                    </Provider>
                </BrowserRouter>
                )
                const loginButton = screen.getByRole("button", {name: "Login"});
                fireEvent.click(loginButton);

                const logoutButton = screen.getByRole("button", {name : "Logout"});
                expect(logoutButton).toBeInTheDocument();
            }) 
        
import React from "react"

import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Hero from "../landing_page/home/Hero"


describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero")
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    })

    test("renders hero image", () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button","/Sign up for free")
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn");
    })
})
import {describe, it} from "vitest"
import { MemoryRouter } from "react-router-dom"
import {render, screen} from "@testing-library/react"


import {WrappedApp,App} from "./App"

describe('App', ()=>{
    it('Renders hello world', ()=>{        
        // ARRANGE - SETUP
        render(<WrappedApp/>)
        // ACT
        // EXPECT
        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent('Home page')
    })

    it('Renders not found if invalid path', ()=>{        
        // ARRANGE - SETUP
        render(<MemoryRouter initialEntries={['/does-not-exist']}>
            <App/>
        </MemoryRouter>)
        // ACT
        // EXPECT
        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent('Not found page')
    })
})

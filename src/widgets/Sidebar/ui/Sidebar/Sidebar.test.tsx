import { fireEvent, screen } from "@testing-library/react"
import { renderWithTranslation } from "../../../../shared/lib/renderWithTranslation/renderWithTranslation"
import { Sidebar } from "./Sidebar"

describe('Sidebar test', () => {
    test('Render sidebar', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('collapsed', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})
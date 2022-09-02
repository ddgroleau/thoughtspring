import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
export function mockNextUseRouter(pathname: string) {
    useRouter.mockImplementation(() => ({
        route: '',
        basePath: '',
        pathname,
        query: {},
        asPath: '',
        push: async () => true,
        replace: async () => true,
        reload: () => null,
        back: () => null,
        prefetch: async () => undefined,
        beforePopState: () => null,
        isFallback: false,
        events: {
            on: () => null,
            off: () => null,
            emit: () => null,
        },
    }));
}

export const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

mockNextUseRouter('/');
describe('Home', () => {
    it('renders component', () => {
        render(<Home />);
        const heading = screen.getByText("Take your business to the next level.");
        expect(heading).toBeInTheDocument();
    });
});
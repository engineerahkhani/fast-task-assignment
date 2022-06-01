import { render, screen } from '@core/utils/test-utils';
import SidebarLayout from './SidebarLayout.component';
import server from '@core/mocks/server';
import { getCategoriesException } from '../../../mocks/handlers';
import { waitFor } from '@testing-library/react';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('SidebarLayout component', () => {
  test('fetches & receives categories on init', async () => {
    render(<SidebarLayout />);
    const navigation = screen.getByRole('navigation');
    const skeleton = screen.getByRole('complementary');
    expect(navigation).toBeInTheDocument();
    expect(skeleton).toBeInTheDocument();

    const allCategories = await screen.findAllByRole('link');
    expect(allCategories.length).toEqual(7);
    expect(await screen.findByText(/boxes/i)).toBeInTheDocument();
    expect(screen.queryByRole('complementary')).toBeFalsy();
    expect(skeleton).not.toBeInTheDocument();
  });
  test('failed to fetch categories', async () => {
    server.use(getCategoriesException);
    render(<SidebarLayout />);
    const skeleton = screen.getByRole('complementary');
    const navigation = screen.getByRole('navigation');
    expect(skeleton).toBeInTheDocument();
    expect(await screen.findByText(/Error has occurred/i)).toBeInTheDocument();

    // const alertErrorMessage = await screen.findByText(/Error has occurred/i);
    // expect(alertErrorMessage).toBeInTheDocument();
  });
});

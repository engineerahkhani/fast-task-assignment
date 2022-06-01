import { render, screen } from '@core/utils/test-utils';
import CatsListComponent from './CatsList.component';
import server from '@core/mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('CatList component', () => {
  test('fetches & receives cats list', async () => {
    render(<CatsListComponent />);
    const skeleton = screen.getByRole('complementary');
    expect(skeleton).toBeInTheDocument();
    const allCategories = await screen.findAllByRole('img');
    expect(allCategories.length).toEqual(10);
    expect(skeleton).not.toBeInTheDocument();
  });
});

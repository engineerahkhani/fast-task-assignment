import ButtonComponent from './Button.component';
import { render, screen } from '../../../utils/test-utils';

describe('Button component', () => {
  let button: HTMLElement | null = null;

  beforeEach(() => {
    render(<ButtonComponent>Press me</ButtonComponent>);
    button = screen.getByRole('button', { name: /Press me/i });
  });

  test('The  button should be in the document', () => {
    expect(button);
  });
});

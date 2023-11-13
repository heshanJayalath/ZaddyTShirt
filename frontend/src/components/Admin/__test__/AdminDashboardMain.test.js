import { render, screen } from '@testing-library/react';
import AdminDashboardMain from '../AdminDashboardMain';

test('renders learn react link', () => {
  render(<AdminDashboardMain />);
  const dashboardElement = screen.getByTitle("heading");
  expect(dashboardElement).toBeInTheDocument();
});

/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom'




describe('Sidebar Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
  });

  it('renders all navigation links', () => {
    const links = [
      'Dashboard',
      'Products',
      'Categories',
      'Customers',
      'Inventory',
      'Reports',
      'Settings'
    ];

    links.forEach(linkText => {
      const linkElement = screen.getByRole('link', { name: linkText });
    //   expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href');
    });
  });
});
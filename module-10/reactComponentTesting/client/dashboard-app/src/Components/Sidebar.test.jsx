/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';

describe('Sidebar Component', () => {
  const mockOpenSidebar = jest.fn();
  
  const renderSidebar = (props = {}) => {
    return render(
      <MemoryRouter>
        <Sidebar 
          openSidebarToggle={false} 
          OpenSidebar={mockOpenSidebar}
          {...props}
        />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    mockOpenSidebar.mockClear();
  });

  it('renders the sidebar with shop brand', () => {
    renderSidebar();
    expect(screen.getByText('SHOP')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    renderSidebar();
    const expectedLinks = [
      'Dashboard',
      'Products',
      'Categories',
      'Customers',
      'Inventory',
      'Reports',
      'Settings'
    ];

    expectedLinks.forEach(linkText => {
      const link = screen.getByText(linkText);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href');
    });
  });

  it('applies responsive class when openSidebarToggle is true', () => {
    renderSidebar({ openSidebarToggle: true });
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('sidebar-responsive');
  });

  it('does not apply responsive class when openSidebarToggle is false', () => {
    renderSidebar({ openSidebarToggle: false });
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).not.toHaveClass('sidebar-responsive');
  });

  it('calls OpenSidebar when close button is clicked', () => {
    renderSidebar();
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);
    expect(mockOpenSidebar).toHaveBeenCalledTimes(1);
  });

  it('renders all icons in the navigation links', () => {
    renderSidebar();
    // The icons are rendered as SVG elements
    const icons = document.querySelectorAll('.icon');
    // We expect 8 icons: 1 header icon + 7 navigation icons
    expect(icons.length).toBe(8);
  });

  it('renders with correct base styling', () => {
    renderSidebar();
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveAttribute('id', 'sidebar');
  });

  it('renders the sidebar title section', () => {
    renderSidebar();
    const titleSection = screen.getByText('SHOP').closest('.sidebar-title');
    expect(titleSection).toBeInTheDocument();
  });

  it('renders navigation items in a list', () => {
    renderSidebar();
    const list = screen.getByRole('list');
    expect(list).toHaveClass('sidebar-list');
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(7); // We expect 7 navigation items
  });
});
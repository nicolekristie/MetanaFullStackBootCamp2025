import EmpCreate from '../Components/EmpCreate';
import { render } from "@testing-library/react";
import { TextEncoder, TextDecoder } from 'text-encoding';
import { describe, expect, it } from '@jest/globals';

import React from 'react';
// import { JSDOM } from 'jsdom';


// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;




describe(EmpCreate, () => {
    it('should display the id field and it should be disabled', () => {
        const { getByRole } = render(<EmpCreate isDisabled={true} />);
        const inputId = screen.getByRole('input', {name: "emp-id"});
        expect(inputId).toBeDisabled();      
    });

    
   it('should display the name field', () => {     
    const { getByRole } = render(<EmpCreate />);
    const nameInput = screen.getByRole('textbox', { name: "emp-name" });
    expect(nameInput).toBeInTheDocument();
    });
})
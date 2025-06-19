
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmpListing from "src/Components/EmpListing.test";
import * as api from "./src/api.js"

//need to mock the external api

jest.mock(api);

describe('EmpListing Component', () => {

    //whenever you do mocking you have to clear all the mocks
    beforeEach(() => jest.clearAllMocks());
    it('should render employee names when api responds', async () => {
        api.getEmployeeListFromApi.mockResolvedValue({
            results: [{ name: "kelly" }],
        })
        render(<EmployeeListing />);
        await waitFor(()=> {
            screen.getByText("kelly");
        })
    });

    it('should render error message when api fails', async () => {
        api.getEmployeeListFromApi.mockRejectedValue({})
        render(<EmployeListing />);
        await waitFor(()=> {
            screen.getByText("Unable to fetch data");
        });
    });

});


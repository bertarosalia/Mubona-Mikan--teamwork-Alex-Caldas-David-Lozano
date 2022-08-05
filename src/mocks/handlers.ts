import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const mockResponse = {
  pruebaguay: "Bien!",
};

const mockResponseError = {
  pruebaguay: "Error!",
};

export const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    const queryParamPage = req.url.searchParams.get("page");
    if (queryParamPage === "0") {
      return res(ctx.status(200), ctx.json(mockResponse));
    }
    return res(ctx.status(500), ctx.json(mockResponseError));
  }),
];

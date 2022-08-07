import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;
const apiLocalUrl = process.env.REACT_APP_LOCAL_API_URL;

const mockJikanResponse = {
  testSuccess: "Great",
};

const mockFailureResponse = {
  pruebaerror: "ERROR",
};

const mockLocalSuccessResponse = [
  {
    testSuccess: "Great",
  },
];

export const handlers = [
  rest.get(`${apiUrl}`, async (req, res, ctx) => {
    const queryParamPage = req.url.searchParams.get("page");

    if (queryParamPage === "0") {
      return res(ctx.status(200), ctx.json(mockJikanResponse));
    }
  }),

  rest.get(`${apiUrl}`, async (req, res, ctx) => {
    const queryParamPage = req.url.searchParams.get("page");

    if (queryParamPage === "asadasda") {
      return res(ctx.status(500), ctx.json(mockFailureResponse));
    }
  }),

  rest.get(`${apiLocalUrl}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLocalSuccessResponse));
  }),

  rest.get(`${apiLocalUrl}/dsa`, async (req, res, ctx) => {
    return res(ctx.status(404), ctx.json(mockFailureResponse));
  }),

  rest.post(`${apiLocalUrl}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLocalSuccessResponse));
  }),

  rest.post(`${apiLocalUrl}/dsa`, async (req, res, ctx) => {
    return res(ctx.status(404), ctx.json(mockFailureResponse));
  }),

  rest.delete(`${apiLocalUrl}/1`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLocalSuccessResponse));
  }),

  rest.delete(`${apiLocalUrl}/7`, async (req, res, ctx) => {
    return res(ctx.status(404), ctx.json(mockFailureResponse));
  }),
];

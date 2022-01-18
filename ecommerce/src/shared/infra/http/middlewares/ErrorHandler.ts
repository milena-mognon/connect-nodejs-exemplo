import AppError from "../../../errors/AppErrors";
import { NextFunction, Request, Response } from "express";

const ErrorHandler = (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response | void => {
  /**
   * Verifica se o erro disparado é um AppError
   */
  if (err instanceof AppError) {
    console.log("entrou no handler do AppError");

    // envia uma resposta com o status e mensagem definidos no AppError
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  /**
   * Se foi um erro ineperado, irá responder com status 500 e a mensagem
   * do erro.
   */
  return response.status(500).json({
    status: "error",
    message: `Internal server error -> ${err.message}`,
  });
};

export default ErrorHandler;

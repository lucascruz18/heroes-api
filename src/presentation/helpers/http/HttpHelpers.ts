import { HttpException, HttpStatus } from '@nestjs/common';

export const badRequest = (errorMessage: string): Error =>
  new HttpException(
    {
      status: HttpStatus.BAD_REQUEST,
      error: errorMessage,
    },
    HttpStatus.BAD_REQUEST,
  );

export const serverError = (error: Error): Error => {
  if (process.env.ENV === 'development') {
    console.log(error);
  }

  return new HttpException(
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Server error.',
    },
    HttpStatus.INTERNAL_SERVER_ERROR,
    {
      cause: error,
    },
  );
};

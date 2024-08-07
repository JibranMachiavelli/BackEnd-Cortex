declare module 'swagger-ui-express' {
  import { RequestHandler } from 'express';
  function serve(): RequestHandler;
  function setup(swaggerDoc): RequestHandler;
  export { serve, setup };
}

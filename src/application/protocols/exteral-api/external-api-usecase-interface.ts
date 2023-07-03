export interface ExternalApiUseCaseInterface {
  get(model: string, filters?: any): Promise<any>;
}

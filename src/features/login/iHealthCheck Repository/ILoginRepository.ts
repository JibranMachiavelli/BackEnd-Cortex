export interface ILoginRepository {
  authenticate(name: string, password: string): Promise<boolean>;
}

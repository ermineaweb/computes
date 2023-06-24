export interface Repository<T> {
  create(t: T): T;
  getById(id: number): T;
  getAll(): T[];
}

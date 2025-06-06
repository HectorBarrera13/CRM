export interface Repository<T> {
  save(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  delete(entity: T): Promise<void>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}

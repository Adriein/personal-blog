export interface IMapper<M, D> {
  toDomain(model: M): D;
  toModel(domain: D): M;
}
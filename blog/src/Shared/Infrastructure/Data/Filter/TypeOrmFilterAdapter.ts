import { merge } from "merge-anything";
import { Filter } from "Shared/Domain/Entity/Filter";
import { Pagination } from "Shared/Domain/Entity/Pagination";


export abstract class TypeOrmFilterAdapter<F extends Filter, T> {
  protected typeormFilter = {};

  protected add(filter: T): void {
    this.typeormFilter = merge(this.typeormFilter, filter);
  }

  public abstract apply(filter: F): T;

  protected pagination(pagination: Pagination) {
    let filter = {};
    const paginationFilter = pagination.build();

    if (paginationFilter.has(Pagination.QUANTITY_FILTER)) {
      const quantity = paginationFilter.get(Pagination.QUANTITY_FILTER)!;

      filter = merge(filter, { take: quantity });
    }

    if (paginationFilter.has(Pagination.PAGE_FILTER)) {
      const page = paginationFilter.get(Pagination.PAGE_FILTER)!;

      const quantity = paginationFilter.get(Pagination.QUANTITY_FILTER)!;

      filter = merge(filter, { skip: (page - 1) * quantity });
    }

    return filter;
  }
}
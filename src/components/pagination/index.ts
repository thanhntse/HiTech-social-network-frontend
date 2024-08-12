import Pagination from "./pagination";

export interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: any, value: any) => void;
}

export default Pagination;

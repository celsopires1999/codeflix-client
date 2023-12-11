import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, FormEvent } from "react";

type SearchFormProps = {
  searchTerm: string;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
  onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export function SearchForm({
  searchTerm,
  onSearch,
  onSearchTermChange,
}: SearchFormProps): JSX.Element {
  return (
    <form onSubmit={onSearch} className="flex items-center space-x-2">
      <button type="submit">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
      </button>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchTermChange}
        className="bg-transparent text-white placeholder-white outline-none"
      />
    </form>
  );
}

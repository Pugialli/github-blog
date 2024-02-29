import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { GitContext } from "../../../../contexts/GitContext";
import useDebounceValue from "../../../../hooks/use-debounce-value";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchPosts } = useContext(GitContext);

  const { register, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  // async function handleSearchTransactions(data: SearchFormInputs) {
  //   // await fetchTransactions(data.query);
  // }
  const search = watch("query");

  const debounceSearch = useDebounceValue(search, 1000);

  useEffect(() => {
    debounceSearch === "" ? fetchPosts() : fetchPosts(debounceSearch);
  }, [debounceSearch, fetchPosts]);

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
    </SearchFormContainer>
  );
}

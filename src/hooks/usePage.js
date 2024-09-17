import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useFetch } from "./useFetch";

export const usePage = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState([]);
  const [query, setQuery] = useState("");

  const itemsByPage = 30;
  const itemsNum = 905;
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${itemsByPage}&offset=${
    page * itemsByPage
  }`;
  const searchUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

  const [data, isLoading] = useFetch(query ? searchUrl : baseUrl);

  useEffect(() => {
    function loadByPage() {
      const maxItems = itemsByPage * page + itemsByPage;

      if (!isLoading && !query) {
        setPageData((prev) => {
          return [...new Set([...prev, ...data["results"]?.map((e) => e.url)])];
        });

        if (data["results"]?.length > maxItems) {
          setPageData([]);
        }
      }
    }
    loadByPage();
  }, [isLoading, data, query, page]);

  useEffect(() => {
    function loadBySearch() {
      if (!isLoading && query) {
        const regex = RegExp(`^${query}`, "i");
        setPageData([]);
        setPage(0);
        setPageData([
          ...data["results"]
            .filter((e) => {
              return e.name.match(regex);
            })
            ?.map((e) => e.url)
            .slice(0, itemsByPage),
        ]);
      }
    }
    loadBySearch();
  }, [isLoading, query, data]);

  useEffect(() => {
    function changePage() {
      const hasMore = page < Math.floor(itemsNum / itemsByPage) ? true : false;
      if (hasMore) {
        setPage((prev) => {
          return prev + 1;
        });
      }
    }
    if (inView) {
      changePage();
    }
  }, [inView]); // eslint-disable-line no-use-before-define

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return { page, pageData, ref, isLoading, query, handleSearch };
};

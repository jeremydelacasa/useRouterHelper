import {
  generatePath,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";

const useRouter = () => {
  const history = useHistory();
  const searchParams = useSearchParams();
  const params = useParams();
  const location = useLocation();

  const updateSearchParams = (newParams = {}, { stack = "push" } = {}) => {
    history[stack](
      `${location.pathname}${generateSearchParamsString({
        ...searchParams,
        ...newParams,
      })}`
    );
  };

  const replaceSearchParams = (newParams = {}, { stack = "push" } = {}) => {
    history[stack](
      `${location.pathname}${generateSearchParamsString(newParams)}`
    );
  };

  const deleteSearchParams = (
    deleteParamList = [],
    { stack = "push" } = {}
  ) => {
    history[stack](
      `${location.pathname}${generateSearchParamsString(
        Object.keys(searchParams).reduce(
          (acc, cur) =>
            deleteParamList.includes(cur)
              ? acc
              : { ...acc, [cur]: searchParams[cur] },
          {}
        )
      )}`
    );
  };

  const push = (
    url,
    { params: paramsPushed = {}, searchParams: searchParamsPushed = {} } = {}
  ) => {
    history.push(
      `${generatePath(url, paramsPushed)}${generateSearchParamsString(
        searchParamsPushed
      )}`
    );
  };
  const replace = (
    url,
    {
      params: paramsReplaced = {},
      searchParams: searchParamsReplaced = {},
    } = {}
  ) => {
    history.replace(
      `${generatePath(url, paramsReplaced)}${generateSearchParamsString(
        searchParamsReplaced
      )}`
    );
  };

  return {
    updateSearchParams,
    replaceSearchParams,
    deleteSearchParams,
    push,
    replace,
    params,
    searchParams,
    location,
  };
};

const useSearchParams = () => {
  const { search } = useLocation();
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());

  return Object.keys(params).reduce((acc, key) => {
    let value = params[key];

    if (!value) {
      return acc;
    }

    try {
      value = JSON.parse(params[key]);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }

    return { ...acc, [key]: value };
  }, {});
};

const generateSearchParamsString = (params) =>
  `?${Object.keys(params).reduce((acc, cur, index, array) => {
    const value = params[cur];

    return `${acc}${cur}=${JSON.stringify(value)}${
      array.length !== index + 1 ? "&" : ""
    }`;
  }, "")}`;

export default useRouter;

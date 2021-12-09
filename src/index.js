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

  const defaultState = {
    from: `${location.pathname}${location.search}`,
  };

  const updateSearchParams = (
    newParams = {},
    { stack = "push", state } = {}
  ) => {
    history[stack](
      `${location.pathname}${generateSearchParamsString({
        ...searchParams,
        ...newParams,
      })}`,
      { ...defaultState, ...state }
    );
  };

  const replaceSearchParams = (
    newParams = {},
    { stack = "push", state } = {}
  ) => {
    history[stack](
      `${location.pathname}${generateSearchParamsString(newParams)}`,
      { ...defaultState, ...state }
    );
  };

  const deleteSearchParams = (
    deleteParamList = [],
    { stack = "push", state } = {}
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
      )}`,
      { ...defaultState, ...state }
    );
  };

  const push = (
    url,
    { params: paramsPushed = {}, searchParams: searchParamsPushed, state } = {}
  ) => {
    history.push(
      `${generatePath(url, paramsPushed)}${
        searchParamsPushed ? generateSearchParamsString(searchParamsPushed) : ""
      }`,
      { ...defaultState, ...state }
    );
  };
  const replace = (
    url,
    {
      params: paramsReplaced = {},
      searchParams: searchParamsReplaced,
      state,
    } = {}
  ) => {
    history.replace(
      `${generatePath(url, paramsReplaced)}${
        searchParamsReplaced
          ? generateSearchParamsString(searchParamsReplaced)
          : ""
      }`,
      { ...defaultState, ...state }
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

import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Interface representing the response state.
 */
interface Response<T> {
  loading: boolean;
  json: T | null;
}

/**
 * Initial state for the response.
 */
const RESPONSE_PARAMS = {
  loading: false,
  json: null,
};

/**
 * Props for the Fetcher component.
 *
 * @template T - The type of the response data.
 * @template P - The type of the request parameters.
 */
interface Props<T, P> {
  /** The API endpoint to fetch data from. */
  api: string;

  /** A render function that receives the response state and returns a JSX element. */
  render: (response: Response<T>) => JSX.Element;

  /** Optional flag to enable search functionality. */
  enableSearch?: boolean;

  /** Optional search term for the API request. */
  searchTerm?: string;

  /** Optional label to display when loading. Can be a boolean or string. */
  loadingLabel?: boolean | string;

  /** Optional default parameters for the API request. */
  defaultParams?: P;
}

/**
 * Fetcher component for fetching data from an API and rendering the response.
 *
 * @template T - The type of the response data.
 * @template P - The type of the request parameters.
 *
 * @param {Props<T, P>} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
const Fetcher = <T, P>({
  api,
  render,
  defaultParams,
  loadingLabel,
  searchTerm = "",
}: Props<T, P>): JSX.Element => {
  const [response, setResponse] = useState<Response<T>>(RESPONSE_PARAMS);

  useEffect(() => {
    fetchData(defaultParams).catch((err) => console.error(err));
  }, [searchTerm, defaultParams]);

  /**
   * Fetches data from the API with the provided parameters.
   *
   * @param {P | undefined} params - The parameters for the API request.
   */
  const fetchData = async (params: P | undefined): Promise<void> => {
    setResponse((prevState) => ({
      ...prevState,
      loading: true,
    }));

    try {
      const resp = await axios.get(api, { params });
      const responseData = resp.data as T;

      setResponse((prevState) => ({
        ...prevState,
        loading: false,
        json: responseData,
      }));
    } catch (error) {
      console.error(error);
      setResponse((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  if (loadingLabel && response.loading) {
    return (
      <span>
        Loading {typeof loadingLabel === "boolean" ? "" : loadingLabel}...
      </span>
    );
  }

  return <div>{render(response)}</div>;
};

export default Fetcher;

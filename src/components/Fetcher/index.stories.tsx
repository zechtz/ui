import { Meta, StoryFn } from "@storybook/react";
import Fetcher from ".";

const meta: Meta<typeof Fetcher> = {
  component: Fetcher,
  title: "Components/Fetcher",
  tags: ["autodocs"],
  argTypes: {
    api: { control: "text" },
    searchTerm: { control: "text" },
    loadingLabel: { control: "text" },
  },
};

export default meta;

type FetcherStory = StoryFn<typeof Fetcher>;

const Template: FetcherStory = (args) => <Fetcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  api: "https://jsonplaceholder.typicode.com/posts",
  render: (response) => (
    <div>
      {response.loading && <p>Loading...</p>}
      <pre>{JSON.stringify(response, null, 4)}</pre>
    </div>
  ),
  loadingLabel: "Loading data",
};

Default.parameters = {
  docs: {
    source: {
      code: `
        <Fetcher
          api="https://jsonplaceholder.typicode.com/posts"
          loadingLabel="Loading posts"
          render={({ loading, json }) =>
            loading ? "Loading...." : <pre>{JSON.stringify(json, null, 4)}</pre>
          }
        />
      `,
    },
  },
};

export const WithSearchTerm = Template.bind({});
WithSearchTerm.args = {
  ...Default.args,
  searchTerm: "example",
  loadingLabel: "Searching",
};
WithSearchTerm.parameters = {
  docs: {
    source: {
      code: `
        <Fetcher
          api="https://jsonplaceholder.typicode.com/posts"
          loadingLabel="Loading posts"
          searchTerm="text to search"
          render={({ loading, json }) =>
            loading ? "Loading...." : <pre>{JSON.stringify(json, null, 4)}</pre>
          }
        />
      `,
    },
  },
};

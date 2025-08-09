import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:8000/___graphql", // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
});

export default client;

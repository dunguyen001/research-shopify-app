import { Shopify } from "@shopify/shopify-api";

const LIST_PRODUCT_QUERY = `
    query listProducts($query: String, $first: Int) {
        products(
            query: $query
            first: $first
        ) {
            edges {
                cursor
                node {
                    id
                    title
                    priceRangeV2 {
                      maxVariantPrice {
                        amount
                      }
                      minVariantPrice {
                        amount
                      }
                    }
                }
            }
        }
    }
`;

export default async function listProducts(session) {
  const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);

  try {
    const results = await client.query({
      
      data: {
        query: LIST_PRODUCT_QUERY,
        variables: {
          query: "title:*icy*",
          first: 10
        },
      },
    });
    return results.body.data;
  } catch (error) {
    if (error.name === "GraphqlQueryError") {
      throw new Error(
        `${error.message}\n${JSON.stringify(error.response, null, 2)}`
      );
    } else {
      throw error;
    }
  }
}

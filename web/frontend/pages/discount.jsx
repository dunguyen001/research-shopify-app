import {
    Page,
    Layout,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  
  import { DiscountCard } from "../components/Discount/DiscountCard";
  
  export default function HomePage() {
    return (
      <Page narrowWidth>
        <TitleBar title="Discount Settings" primaryAction={null} />
        <Layout>
          <Layout.Section>
            <DiscountCard />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
  
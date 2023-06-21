import { Filters, ProductList, Sort, PageHero } from "../components";
import { ProductsPageWrapper } from "./styleWrappers";

export default function ProductsPage() {
  return (
    <main>
      <PageHero title="products" />
      <ProductsPageWrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </ProductsPageWrapper>
    </main>
  );
}

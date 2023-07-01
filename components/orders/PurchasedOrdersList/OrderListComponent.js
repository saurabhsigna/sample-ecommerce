import SingleOrder from "@components/orders/PurchasedOrdersList/subcomponent/SinglePurchasedOrder"
const App = () => {
  return (
    <section
      data-section-id="1"
      data-share=""
      data-category="order-history"
      data-component-id="cfc459fa_01_awz"
      className="py-20"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-2">Order history</h3>
          <p className="text-sm font-[500] mb-8">
            Recent Purchased Orders dolor sit amet consectutar
          </p>
       <SingleOrder/>
      
        </div>
      </div>
    </section>
  );
};

export default App;

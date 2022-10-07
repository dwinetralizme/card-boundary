import "./App.css";

import { Suspense } from "react";
import Stats from "./components/Stats";
import Card from "./components/Card";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="flex w-full justify-center min-h-screen pt-8 sm:px-8 md:pt-8 bg-slate-300 ">
      <Suspense fallback={<Spinner />}>
        <Card>
          <Stats
            logo="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
            endpoint=""
          />
        </Card>
      </Suspense>
    </div>
  );
}

export default App;

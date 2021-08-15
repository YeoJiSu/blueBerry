import Layout from "components/Layout";
import Link from "next/link";
import React from "react";
import { PlaceSS } from "./place.style";

const PlacePage = (): JSX.Element => {
  return (
    <Layout>
      <PlaceSS>
        <span>
          <div>
            블루베리안경부산대점
            <Link href="http://kko.to/Fquwq-4fj">
              <a>
                <img src="/place.png" width="25px" alt="" />
              </a>
            </Link>
          </div>
        </span>

        <span>
          <div>
            블루베리안경부경대점
            <Link href="http://kko.to/zpN1uzf40">
              <a>
                <img src="/place.png" width="25px" alt="" />
              </a>
            </Link>
          </div>
        </span>
      </PlaceSS>
    </Layout>
  );
};

export default PlacePage;

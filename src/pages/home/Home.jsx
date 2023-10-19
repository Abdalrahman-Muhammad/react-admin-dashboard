import "./home.css";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { Chart } from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import { WidgetSm } from "../../components/widgetSm/WidgetSm";
import { WidgetLg } from "../../components/widgetLg/WidgetLg";

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        props={{
          data: userData,
          dataKey: "Active User",
          grid: true,
          title: "User Analytics",
        }}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

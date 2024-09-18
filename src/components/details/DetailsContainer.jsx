import { useFetch } from "../../hooks/useFetch";
import { HomeDetailInfo } from "../home/detail/HomeDetailInfo";
import { BaseCard } from "../interface/BaseCard";
import { BaseSpinner } from "../interface/BaseSpinner";

export const DetailsContainer = ({
  item,
  increaseItem,
  decrementItem,
  itemSelect,
}) => {
  const [data, isLoading] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${item}`
  );
  const [dataExtra, isLoadingExtra] = useFetch(
    `https://pokeapi.co/api/v2/pokemon-species/${item}`
  );

  return (
    <section className="home-detail-section">
      <BaseCard>
        {!isLoading && !isLoadingExtra ? (
          <div className="detail-container">
            <div className="detail-img-container">
              <img
                src={data?.sprites?.other["official-artwork"]["front_default"]}
                alt=""
                className="detail-img"
              />
            </div>
            <HomeDetailInfo
              data={data}
              dataExtra={dataExtra}
              increaseItem={increaseItem}
              decrementItem={decrementItem}
              itemSelect={itemSelect}
            />
          </div>
        ) : (
          <BaseSpinner />
        )}
      </BaseCard>
    </section>
  );
};

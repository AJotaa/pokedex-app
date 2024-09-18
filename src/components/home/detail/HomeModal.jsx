import { BaseModal } from "../../interface/BaseModal";
import { HomeDetailSection } from "./HomeDetailSection";

export const HomeModal = ({
  item,
  increaseItem,
  decrementItem,
  itemSelect,
  handleOpen
}) => {
  return (
    <BaseModal handleOpen={handleOpen}>
      <HomeDetailSection
        item={item}
        increaseItem={increaseItem}
        decrementItem={decrementItem}
        itemSelect={itemSelect}
      />
    </BaseModal>
  );
};

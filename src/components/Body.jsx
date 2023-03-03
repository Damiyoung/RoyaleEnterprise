import NftSection from "./NftSection";

import styles from "../globalStyle";
import HeaderContent from "./HeaderContent";

const Body = () => {
  return (
    <div>
      <div className={`${styles.layout}`}>
        <div>
          <HeaderContent />
        </div>
        <NftSection />
      </div>
    </div>
  );
};

export default Body;

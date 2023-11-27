import Itemcss from "./Item.module.css"

let Items = ({ fruitsItems }) => {
  return (
    <>
      <ul className={`${Itemcss['ui-bg']}`}>
        {fruitsItems.map((item) => {
          return (
            <li className={`${Itemcss['li-text-color']}`} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Items;

// Wherever we use any loop it is important to use key to detect Exact changes

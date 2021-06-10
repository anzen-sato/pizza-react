import { Categories, PizzaBlock, SortPopup } from "../components";

const Home = (props) => {
  console.log(props);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            items={["Мясные", "Вегетареанская", "Гриль", "Острые", "Закрытые"]}
          />
          <SortPopup items={["популярности", "цене", "алфавиту"]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {props.items.map((item) => (
            <PizzaBlock key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

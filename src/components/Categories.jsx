import {Button} from "./index";

const Categories = () => {
    return <div className="categories">
              <Button outline={true}>What's up?</Button>
              <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
              </ul>
            </div>
}

export default  Categories;
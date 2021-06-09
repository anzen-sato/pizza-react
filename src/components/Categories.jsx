import {useState} from "react";
const Categories = (props) => {
    const selectItem = (item) => {
        setSelectedItem(item);
        console.log(item)
    }
    const [selectedItem, setSelectedItem] = useState(null);
    return <div className="categories">
              <ul>
                <li onClick={()=>selectItem(null)} className={selectedItem === null ? "active" : ""}>Все</li>
                  {
                      props.items && props.items.map((item, index) =>
                          <li className={selectedItem === item ? "active" : ""} onClick={()=>selectItem(item)} key={`${item}_${index}`}>{item}</li>)
                  }
              </ul>
            </div>
}

export default  Categories;
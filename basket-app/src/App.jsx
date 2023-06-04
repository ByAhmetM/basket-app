import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import CardComponents from "./components/CardComponents";
import { useState } from "react";
import "./App.css";

function App() {
  const storeItems = [
    {
      name: "Çikolata Sosu",
      price: 25,
    },
    {
      name: "Basket Topu",
      price: 20,
    },
    {
      name: "Çikolata Kabı",
      price: 10,
    },
  ];

  const [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = basketItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <SimpleGrid cols={3} className="Store">
        {storeItems.map(({ name, price }, i) => {
          return (
            <CardComponents
              key={i}
              name={name}
              price={price}
              onAdd={() => {
                setBasketItems([
                  ...basketItems,
                  {
                    name,
                  },
                ]);
              }}
            />
          );
        })}
      </SimpleGrid>
      <Input.Wrapper label="Arama ">
        <Input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </Input.Wrapper>
      <List
        className="list"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
      >
        {filteredItems.map(({ name }, i) => (
          <List.Item key={i}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;

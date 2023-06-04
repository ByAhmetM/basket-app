import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  Input,
  Button,
  Group,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import CardComponents from "./components/CardComponents";
import { useState } from "react";
import "./App.css";
import storeItems from "./db";

function App() {
  const [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama ">
          <Input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Temizle</Button>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ name, price, src }, i) => {
          return (
            <CardComponents
              key={i}
              name={name}
              price={price}
              src={src}
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
        {basketItems.map(({ name }, i) => (
          <List.Item key={i}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;

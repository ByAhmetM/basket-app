import {
  ActionIcon,
  Container,
  Drawer,
  SimpleGrid,
  List,
  ThemeIcon,
  Indicator,
  Input,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { IconCircleCheck, IconShoppingCart } from "@tabler/icons-react";
import CardComponents from "./components/CardComponents";
import { useState } from "react";
import "./App.css";
import storeItems from "./db";

function App() {
  const [opened, setOpened] = useState(false);
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
        <Indicator color="red" label={basketItems.length} size="22">
          <Button onClick={() => setOpened(true)}>
            <IconShoppingCart size="22" />
          </Button>
        </Indicator>
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
      <Drawer
        opened={opened}
        padding="md"
        size="xs"
        onClose={() => setOpened(false)}
        title={
          <Text fz="lg" fs="italic">
            Sepetim
          </Text>
        }
      >
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
      </Drawer>
    </Container>
  );
}

export default App;

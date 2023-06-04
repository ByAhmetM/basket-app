import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function CardComponents({ name, price, src, onAdd }) {
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={src} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {price}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={onAdd}
        >
          Ekle
        </Button>
      </Card>
    </div>
  );
}

export default CardComponents;

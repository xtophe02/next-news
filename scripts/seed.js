// const { db } = require('@vercel/postgres');
//FOR DOCKER-COMPOSE POSTGRES
const { Pool } = require("pg");
const DUMMY_NEWS = [
  {
    id: "n1",
    slug: "will-ai-replace-humans",
    title: "Will AI Replace Humans?",
    image: "ai-robot.jpg",
    date: "2021-07-01",
    content:
      "Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.",
  },
  {
    id: "n2",
    slug: "beaver-plague",
    title: "A Plague of Beavers",
    image: "beaver.jpg",
    date: "2022-05-01",
    content:
      "Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?",
  },
  {
    id: "n3",
    slug: "couple-cooking",
    title: "Spend more time together!",
    image: "couple-cooking.jpg",
    date: "2024-03-01",
    content:
      "Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!",
  },
  {
    id: "n4",
    slug: "hiking",
    title: "Hiking is the best!",
    image: "hiking.jpg",
    date: "2024-01-01",
    content:
      "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
  },
  {
    id: "n5",
    slug: "landscape",
    title: "The beauty of landscape",
    image: "landscape.jpg",
    date: "2022-07-01",
    content:
      "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
  },
];

async function seedNews(client) {
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    // Create the "users" table if it doesn't exist
    const createTable = await client.query(`
      CREATE TABLE IF NOT EXISTS news (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        content TEXT NOT NULL,
        date DATE NOT NULL
      );
    `);

    console.log(`Created "news" table`);

    // Insert data into the "users" table
    const insertedNews = await Promise.all(
      DUMMY_NEWS.map(async (newItem) => {
        return client.query(
          `
        INSERT INTO news ( slug, title, image, content, date)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (id) DO NOTHING;
      `,
          [
            newItem.slug,
            newItem.title,
            newItem.image,
            newItem.content,
            newItem.date,
          ]
        );
      })
    );

    console.log(`Seeded ${insertedNews.length} news`);

    return {
      createTable,
      news: insertedNews,
    };
  } catch (error) {
    console.error("Error seeding news:", error);
    throw error;
  }
}

async function main() {
  console.log("Connecting to the database", process.env.PGHOST);
  const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432,
  });

  const client = await pool.connect();
  try {
    await seedNews(client);
  } catch (error) {
  } finally {
    // await client.end();
    await client.release();
  }
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});

import { DUMMY_NEWS } from "@/data/dummy-news";
import { pool } from "./db";

export async function getAllNews() {
  const client = await pool.connect();
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await client.query("SELECT * FROM news");
    return data.rows;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Re-throw the error to be handled by the caller
  } finally {
    client.release();
  }
}

export async function getSingleNews(slug: string) {
  const client = await pool.connect();
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await client.query("SELECT * FROM news WHERE slug = $1", [
      slug,
    ]);

    return data.rows[0];
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Re-throw the error to be handled by the caller
  } finally {
    client.release();
  }
}

export async function getLatestNews() {
  const client = await pool.connect();
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await client.query(
      "SELECT * FROM news ORDER BY date DESC LIMIT 3"
    );
    return data.rows;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Re-throw the error to be handled by the caller
  } finally {
    client.release();
  }
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => a - b);
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}

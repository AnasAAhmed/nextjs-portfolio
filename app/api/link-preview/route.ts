import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest) {
  const projectUrlsHeader = req.headers.get("Project-Urls");
  if (!projectUrlsHeader) throw new Error("Missing Project-Urls header");

  const projectUrls: string[] = JSON.parse(projectUrlsHeader);
  let errorredUrls: string = '';

  try {
    const data = await Promise.all(
      projectUrls.map(async (url) => {
        const response = await fetch(url);
        console.log(url,response);

        const html = await response.text();
        if (!response.ok) {
          errorredUrls += (url + ': ' + await response.statusText)
        }
        const $ = cheerio.load(html);

        const title =
          $('meta[property="og:title"]').attr("content") || $("title").text();
        const description =
          $('meta[property="og:description"]').attr("content") ||
          $('meta[name="description"]').attr("content") ||
          "";
        const image = $('meta[property="og:image"]').attr("content") || "";

        return { title, description, image, url };
      })
    );

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { error: "Failed to fetch OpenGraph data " + JSON.stringify(errorredUrls) + (error as Error).message },
      { status: 500 }
    );
  }
}

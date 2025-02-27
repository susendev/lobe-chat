import { toolsClient } from '@/libs/trpc/client';

class SearchService {
  search(query: string, searchEngine?: string[]) {
    return toolsClient.search.query.query({ query, searchEngine });
  }

  crawlPage(url: string) {
    return toolsClient.search.crawlPage.query({ url });
  }

  crawlPages(urls: string[]) {
    return toolsClient.search.crawlPages.query({ urls });
  }
}

export const searchService = new SearchService();

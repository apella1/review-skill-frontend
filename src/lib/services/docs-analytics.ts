interface PageView {
  path: string;
  timestamp: number;
}

interface SearchTerm {
  term: string;
  timestamp: number;
}

class DocsAnalytics {
  private pageViews: PageView[] = [];
  private searchTerms: SearchTerm[] = [];

  trackPageView(path: string) {
    this.pageViews.push({
      path,
      timestamp: Date.now(),
    });
    // TODO: Send to analytics backend
  }

  trackSearch(term: string) {
    this.searchTerms.push({
      term,
      timestamp: Date.now(),
    });
    // TODO: Send to analytics backend
  }

  getPopularPages(days: number = 7): string[] {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    const recentViews = this.pageViews.filter(
      (view) => view.timestamp > cutoff,
    );

    const pageCount = recentViews.reduce(
      (acc, view) => {
        acc[view.path] = (acc[view.path] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(pageCount)
      .sort(([, a], [, b]) => b - a)
      .map(([path]) => path);
  }

  getPopularSearchTerms(days: number = 7): string[] {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    const recentSearches = this.searchTerms.filter(
      (search) => search.timestamp > cutoff,
    );

    const termCount = recentSearches.reduce(
      (acc, search) => {
        acc[search.term] = (acc[search.term] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(termCount)
      .sort(([, a], [, b]) => b - a)
      .map(([term]) => term);
  }
}

export const docsAnalytics = new DocsAnalytics();

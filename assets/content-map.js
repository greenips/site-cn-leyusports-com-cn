// assets/content-map.js

const siteConfig = {
  baseUrl: "https://site-cn-leyusports.com.cn",
  primaryKeyword: "乐鱼体育",
  defaultLanguage: "zh-CN"
};

const contentSections = [
  {
    id: "homepage",
    title: "首页",
    tags: ["乐鱼体育", "主页", "体育赛事"],
    description: "乐鱼体育最新动态与热门比赛"
  },
  {
    id: "live-scores",
    title: "比分直播",
    tags: ["乐鱼体育", "比分", "实时"],
    description: "实时更新各大体育赛事比分"
  },
  {
    id: "news",
    title: "新闻资讯",
    tags: ["乐鱼体育", "新闻", "赛事分析"],
    description: "深度报道与专家分析"
  },
  {
    id: "videos",
    title: "精彩视频",
    tags: ["乐鱼体育", "视频", "集锦"],
    description: "比赛集锦与幕后花絮"
  },
  {
    id: "community",
    title: "社区",
    tags: ["乐鱼体育", "讨论", "论坛"],
    description: "用户交流与互动"
  }
];

const keywordsRegistry = [
  "乐鱼体育",
  "体育",
  "赛事",
  "直播",
  "比分",
  "足球",
  "篮球",
  "网球",
  "电子竞技",
  "体育新闻"
];

function searchSections(searchInput) {
  const lowerInput = searchInput.toLowerCase();
  const results = [];

  for (const section of contentSections) {
    const titleMatch = section.title.toLowerCase().includes(lowerInput);
    const tagsMatch = section.tags.some(tag =>
      tag.toLowerCase().includes(lowerInput)
    );
    const descMatch = section.description.toLowerCase().includes(lowerInput);

    if (titleMatch || tagsMatch || descMatch) {
      results.push({
        id: section.id,
        title: section.title,
        tags: section.tags,
        description: section.description
      });
    }
  }

  return results;
}

function filterByTags(tagList) {
  if (!tagList || tagList.length === 0) {
    return contentSections.slice();
  }

  const lowerTags = tagList.map(t => t.toLowerCase());
  return contentSections.filter(section =>
    section.tags.some(tag => lowerTags.includes(tag.toLowerCase()))
  );
}

function getSectionById(id) {
  return contentSections.find(section => section.id === id) || null;
}

function getAllTags() {
  const tagSet = new Set();
  for (const section of contentSections) {
    for (const tag of section.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}

function isKeywordRelated(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return keywordsRegistry.some(kw => kw.toLowerCase().includes(lowerKeyword));
}

// Example usage (uncomment to test in browser or Node.js):
// console.log(searchSections("乐鱼体育"));
// console.log(filterByTags(["乐鱼体育", "直播"]));
// console.log(getSectionById("news"));
// console.log(getAllTags());
// console.log(isKeywordRelated("乐鱼体育"));

export {
  siteConfig,
  contentSections,
  keywordsRegistry,
  searchSections,
  filterByTags,
  getSectionById,
  getAllTags,
  isKeywordRelated
};
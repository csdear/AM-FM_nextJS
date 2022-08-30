interface ArticleMeta {
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
}

interface ArticleInfo {
    meta: ArticleMeta;
    content: string;
}

/* export both interfaces.
I assumed export not needed if it is a global types.d.ts 
file...but this needs it. Perhaps just a different pattern?
See https://github.com/csdear/nextGarbage/blob/master/src/types.d.ts
for my usual.
UPDATED. Changed it from a no name type to an interface. So I could
use the interface in my component. type as seen here 
https://gist.github.com/cleggacus/bb91d2f577a2155e5a2b658628b79399/raw/f0bbbf54d4c4a137981c5bf60aa0d47dfd304761/article.ts
was not cutting it. 
*/
interface Article { 
    ArticleMeta,
    ArticleInfo
}
let n=0;

export const newsTemplate = news => `
    <div class="item--${n++,n%6}">
        <img src="$(news.urlToImage)" alt="newsImage">
    </div>
`;

//w9動態網頁簡報p16
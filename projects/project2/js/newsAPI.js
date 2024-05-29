document.addEventListener('DOMContentLoaded', () => {
    const newsAPIKey = '005179c3be514c0aafd6031259fc90eb';
    const newsURL = `https://newsapi.org/v2/everything?q=Champions%20League&apiKey=${newsAPIKey}`;
    fetch(newsURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('News data not available');
            }
            return response.json();
        })
        .then(data => {
            const articles = data.articles.map(article => `
                <div class="article">
                    <h3>${article.title}</h3>
                    <h5>${article.author}</h5>
                    <p>${article.description}</p>
                    <p>${article.content}</p>
                    <a href ="${article.url}">Read More</a>
                </div>
            `).join('');
            document.getElementById('news-articles').innerHTML = articles;
        })
        .catch(error => {
            document.getElementById('news-error').textContent = 'Failed to fetch news articles: ' + error.message;
        });
});

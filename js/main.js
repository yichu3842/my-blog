// ========== 主题切换 ==========
(function () {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.textContent = '🌙';
    document.querySelector('.nav').appendChild(toggleBtn);

    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', function () {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
})();

// ========== 回到顶部按钮 ==========
(function () {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// ========== 文章搜索（练习用） ==========
// 提示：在 Phase 2 学习 JavaScript 时，你可以在这里实现文章搜索功能
// 思路：
// 1. 获取搜索输入框的值
// 2. 遍历所有 .article-card
// 3. 比对标题和摘要是否包含搜索词
// 4. 不匹配的卡片隐藏掉
function searchArticles(keyword) {
    const cards = document.querySelectorAll('.article-card');
    const kw = keyword.trim().toLowerCase();

    cards.forEach(function (card) {
        const title = card.querySelector('.article-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.article-excerpt').textContent.toLowerCase();

        if (title.includes(kw) || excerpt.includes(kw)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ========== TODO: 你来完成的功能 ==========
// 1. 添加一个搜索框，调用上面的 searchArticles 函数
// 2. 用 Fetch 加载 JSON 数据动态渲染文章列表
// 3. 添加移动端菜单展开功能

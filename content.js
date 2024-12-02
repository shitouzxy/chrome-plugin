// 二次元头像 URL
const avatarURL = "https://pic2.zhimg.com/v2-637b5156a4417085f4cb9df039db6f91_1440w.jpg"; // 替换为你喜欢的二次元头像链接

// 获取所有视频封面元素
const videoCovers = document.querySelectorAll('.bili-video-card__cover > img'); // 通过F12 审查Dom 元素得到 bilibili 封面

const sources = document.querySelectorAll('.bili-video-card__cover source');
// 遍历所有视频封面元素
sources.forEach((source) => {
  source.remove();
});
console.log('封面元素', videoCovers);
// 替换封面
videoCovers.forEach((img) => {
    img.onload = "";
  img.src = avatarURL; // 替换图片地址
  img.style.objectFit = "cover"; // 防止拉伸

});

// 如果动态加载的内容需要替换，使用 Observer API 监听 DOM 变化
const observer = new MutationObserver(() => {
  const newCovers =  document.querySelectorAll('.bili-video-card__image img');
  const sources = document.querySelectorAll('.bili-video-card__cover source');
    // 遍历所有视频封面元素
    sources.forEach((source) => {
    source.remove();
    });

  newCovers.forEach((img) => {
    img.src = avatarURL;
    img.style.objectFit = "cover";
  });
});

// 开始监听
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

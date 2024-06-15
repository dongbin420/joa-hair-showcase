const axios = require('axios');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { onRequest } = require('firebase-functions/v2/https');
// const logger = require('firebase-functions/logger');

initializeApp();
const db = getFirestore();
const MAIN_API_URL = `${process.env.INSTAGRAM_API_BASE_URL}/v20.0/${process.env.INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,timestamp,thumbnail_url,username,caption,is_shared_to_feed,children{id,media_type,media_url,thumbnail_url}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&pretty=1&limit=10000`;

// 수동으로 인스타그램 api에서 인스타그램 posts들 가져와서, 데이터베이스에 저장하는 함수
exports.manualFetchInstaPosts = onRequest({ region: 'australia-southeast1' }, async (req, res) => {
  try {
    const { data } = await axios.get(MAIN_API_URL);
    await db.collection('instagram_all_posts').doc('latest').set(data);

    console.log('Instagram posts updated successfully');
    res.send('Manual trigger executed successfully!');
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
  }
});

// 인스타그램 모든 포스트들 8개, 16개로 나눠서 클라이언트 요청시 보내주는 함수.
exports.getSortedInstagramPosts = onRequest(
  { region: 'australia-southeast1', cors: 'http://localhost:3000' },
  // 프로덕션시 cors 대상 오리진 변경 [/joahair\.com$/]
  async (req, res) => {
    const postSize = Number(req.query.postSize) || 16;
    const startPost = Number(req.query.startPost) || 1;

    try {
      const doc = await db.collection('instagram_all_posts').doc('latest').get();

      if (!doc.exists) {
        return res.status(404).send('No posts found');
      }

      const postsData = doc.data().data.map((post, idx) => ({ databaseId: idx, ...post }));
      const startIndex = startPost - 1;
      const endIndex = startIndex + postSize;
      const sortedPosts = postsData.slice(startIndex, endIndex);

      res.status(200).json(sortedPosts);
    } catch (error) {
      console.error('Error fetching sorted posts:', error);
      res.status(500).send('Error fetching Instagram posts');
    }
  },
);

// instagram_all_posts 데이터베이스에서 selectedPost에 해당하는 id만 검색해서, 클라이언트 요청시 보내주는 함수
exports.getSelectedInstagramPosts = onRequest(
  { region: 'australia-southeast1', cors: 'http://localhost:3000' },
  // 프로덕션시 cors 대상 오리진 변경 [/joahair\.com$/]
  async (req, res) => {
    try {
      const postIds = [
        '18027365918493604',
        '17991085172648305',
        '18017946779338179',
        '18010264298227357',
        '18435528307019745',
        '17969291120610239',
        '18051885811630862',
        '18057197821592914',
      ];

      const cacheDurationMilliseconds = 24 * 60 * 60 * 1000;
      const cacheDoc = await db.collection('cache').doc('selectedPosts').get();
      const cachedData = cacheDoc.exists ? cacheDoc.data() : null;

      if (
        cachedData &&
        cachedData.timestamp &&
        Date.now() - cachedData.cachedtimestamp < cacheDurationMilliseconds
      ) {
        // Return cached data if it's not older than a day
        return res.status(200).json(cachedData.data);
      }

      const doc = await db.collection('instagram_all_posts').doc('latest').get();
      const postsData = doc.data().data;
      const selectedData = postsData.filter((post) => postIds.includes(post.id));

      await db.collection('cache').doc('selectedPosts').set({
        data: selectedData,
        cachedtimestamp: Date.now(),
      });

      res.status(200).json(selectedData);
    } catch (error) {
      console.error('Error fetching selected data:', error);
    }
  },
);

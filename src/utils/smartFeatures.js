export function generateSmartTags(content) {
  const summary = content.slice(0, 50) + (content.length > 50 ? '...' : '');
  const tags = content.split(' ').filter(w => w.length > 3).slice(0,3);
  const moods = ['Happy','Sad','Neutral','Excited'];
  const mood = moods[Math.floor(Math.random() * moods.length)];
  return { summary, tags, mood };
}

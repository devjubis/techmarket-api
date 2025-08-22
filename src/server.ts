import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
  console.log(`📊 Health check available at: http://localhost:${port}/health`);
});
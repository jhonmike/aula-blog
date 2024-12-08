import { useEffect, useState } from "react"
import { Avatar, Button, Card } from "antd"
import { getPosts } from "../services/post"
import './PostList.css'

const { Meta } = Card

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts()
      setPosts(response)
    }

    fetchPosts()
  }, [])

  return (
    <div className="post-list-container">
      {posts.map((post) => (
        <Card key={post.id} hoverable style={{ borderRadius: '8px', marginBottom: '20px' }}>
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title={post.title}
            description={post.summary}
          />
          <div className="card-footer">
            <span>{post.author} - {post.date}</span>
            <Button type="primary">Leia mais</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default PostList

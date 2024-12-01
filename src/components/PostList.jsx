import { Avatar, Button, Card } from "antd"
import './PostList.css'

const { Meta } = Card

const postsMock = [
  {
    id: 1,
    title: "Primeiro Post",
    summary: "Este é o resumo do primeiro post",
    author: "João",
    date: "01/01/2021"
  },
  {
    id: 2,
    title: "Segundo Post",
    summary: "Este é o resumo do segundo post",
    author: "Maria",
    date: "02/01/2021"
  },
  {
    id: 3,
    title: "Terceiro Post",
    summary: "Este é o resumo do terceiro post",
    author: "José",
    date: "03/01/2021"
  }
]

const PostList = () => {
  return (
    <div className="post-list-container">
      {postsMock.map((post) => (
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

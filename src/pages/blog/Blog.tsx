import React from 'react';
import "./Blog.css";
import { Eye, Chat, Heart, DotsThree } from "@phosphor-icons/react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
  views: number;
  comments: number;
  likes: number;
}

const Blog: React.FC = () => {

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Melhorias no Transporte Público e Mobilidade Sustentável Urbana",
      date: "05 de out de 2024",
      readTime: "3 min",
      excerpt: "Explorando a importância de sistemas de transporte público eficientes e sustentáveis, com foco em soluções que reduzam a poluição e melhorem a qualidade de vida urbana por meio de uma mobilidade inteligente.",
      imageUrl: "https://i.imgur.com/N20hNr4.jpeg",
      views: 150,
      comments: 12,
      likes: 35,
    },
    {
      id: 2,
      title: "Cidades Inteligentes e Inclusivas para um Futuro Sustentável",
      date: "15 de set de 2024",
      readTime: "4 min",
      excerpt: "Como as cidades inteligentes podem transformar o cotidiano urbano, promovendo espaços mais acessíveis, inclusivos e sustentáveis, com foco na tecnologia e na inovação para garantir qualidade de vida.",
      imageUrl: "https://i.imgur.com/klZpb6D.jpeg",
      views: 200,
      comments: 15,
      likes: 50,
    },
    {
      id: 3,
      title: "Gestão de Resíduos e Reciclagem nas Comunidades Urbanas",
      date: "25 de ago de 2024",
      readTime: "3 min",
      excerpt: "A gestão de resíduos é essencial para cidades limpas e saudáveis. Descubra como práticas de reciclagem e conscientização da população podem ajudar a reduzir o impacto ambiental nas áreas urbanas.",
      imageUrl: "https://i.imgur.com/vtD4O9D.png",
      views: 100,
      comments: 20,
      likes: 45,
    },
    {
      id: 4,
      title: "Uso de Energia Limpa e Renovável nas Cidades Modernas",
      date: "10 de jul de 2024",
      readTime: "2 min",
      excerpt: "O uso de fontes de energia renovável, como solar e eólica, está transformando as cidades. Saiba como a energia limpa pode contribuir para um futuro urbano mais sustentável e ecológico.",
      imageUrl: "https://i.imgur.com/TRLu6NV.jpeg",
      views: 180,
      comments: 18,
      likes: 60,
    },
    {
      id: 5,
      title: "Importância dos Espaços Verdes e Qualidade de Vida Urbana",
      date: "01 de jun de 2024",
      readTime: "3 min",
      excerpt: "A presença de áreas verdes em cidades melhora a qualidade de vida, oferecendo lazer, ar puro e promovendo a biodiversidade. Veja como parques e praças são essenciais para uma vida urbana saudável.",
      imageUrl: "https://i.imgur.com/CaJS95O.png",
      views: 220,
      comments: 25,
      likes: 75,
    },
    {
      id: 6,
      title: "Planejamento Urbano Sustentável para Cidades do Futuro",
      date: "15 de mai de 2024",
      readTime: "5 min",
      excerpt: "O planejamento urbano sustentável visa criar cidades resilientes e preparadas para o futuro. Com soluções inovadoras, é possível promover o desenvolvimento sem comprometer o meio ambiente.",
      imageUrl: "https://i.imgur.com/wH1N4Cm.jpeg",
      views: 300,
      comments: 30,
      likes: 100,
    }
  ];

  return (
    <div className="blog-container ">
      <div className="blog-list">
        {posts.map(post => (
          <div className="blog-card" key={post.id}>
            <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
            <div className="blog-card-info">
              <span className="post-date">{post.date}</span> <span>• {post.readTime}</span>
              <DotsThree size={20} className="ellipsis-icon" />
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p>{post.excerpt}</p>
            <hr className="divider" />  
            <div className="blog-card-footer">
              <div className="interaction-icons">
                <span><Eye size={20} /> {post.views}</span>
                <span><Chat size={20} /> {post.comments}</span>
                <span><Heart size={20} /> {post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

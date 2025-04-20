import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projelerim</h2>

      <div className="project">
        <h3>Süper Kahraman ile Web Sitesi Oluşturma</h3>
        <p>
          Bu proje, süper kahramanlar temalı bir web sitesi oluşturmayı amaçlayan bir projedir. 
          Kullanıcılar süper kahramanları seçebilir ve farklı kahramanlar hakkında bilgi alabilirler.
        </p>
        <p><strong>Kullanılan Teknolojiler:</strong>HTML</p>
        <a href="https://acknowledgeme41.github.io/hero-memores/" target="_blank" rel="noopener noreferrer">Görüntüle</a>
      </div>
      <div className="project">
        <h3>Node.js ile Dosya İşlemleri</h3>
        <p>
          Bu projede, Node.js'in `fs` modülünü kullanarak dosya okuma, yazma, ekleme ve silme işlemleri yapılmaktadır. 
          Bu proje, dosya yönetimi ve temel dosya işlemleri konusunda pratik yapmanızı sağlar.
        </p>
        <p><strong>Kullanılan Teknolojiler:</strong> Node.js, fs modülü, JavaScript</p>
        <a href="https://github.com/ACKNOWLEDGEME41/Gorev7" target="_blank" rel="noopener noreferrer">GitHub Reposu</a>
      </div>
      <div className="project">
        <h3>React ile Ödeme Formu Oluşturma</h3>
        <p>
          Bu projede, React kullanarak bir ödeme formu oluşturulmuştur. Kullanıcılar ödeme bilgilerini girebilir ve 
          form verilerini doğrulayan bir sistemle ödeme işlemi gerçekleştirebilirler.
        </p>
        <p><strong>Kullanılan Teknolojiler:</strong> React, JavaScript, CSS</p>
        <a href="https://github.com/ACKNOWLEDGEME41/Gorev8" target="_blank" rel="noopener noreferrer">GitHub Reposu</a>
      </div>
      <div className="project">
        <h3>React kullanarak API'lerden veri çekmek ve çekilen veriyi işleyip ekranda göstermek.</h3>
        <p>
          Bu projede, React kullanarak API'lerden veri çekilmekte ve çekilen veriler işlenip ekranda gösterilmektedir. 
          API'ler ile etkileşim kurarak dinamik ve güncel içerik oluşturulmaktadır.
        </p>
        <p><strong>Kullanılan Teknolojiler:</strong> React, JavaScript, CSS, API</p>
        <a href="https://github.com/ACKNOWLEDGEME41/Gorev9" target="_blank" rel="noopener noreferrer">GitHub Reposu</a>
      </div>
      <div className="project">
        <h3>Kendime Ait Yaptığım Web Sayfası</h3>
        <p>
          Bu proje, kişisel portföyümü ve kendimi tanıttığım bir web sayfası oluşturmaktadır. 
         
        </p>
        <p><strong>Kullanılan Teknolojiler:</strong> HTML, CSS, JavaScript, GitHub Pages</p>
        <a href="https://acknowledgeme41.github.io/ACKNOWLEDGME_41/" target="_blank" rel="noopener noreferrer">Görüntüle</a>
      </div>

      <p>Projelerimi görmek isterseniz, <a href="https://github.com/ACKNOWLEDGEME41" target="_blank" rel="noopener noreferrer">GitHub profilim</a> linkine tıklayın.</p>
    </section>
  );
};

export default Projects;

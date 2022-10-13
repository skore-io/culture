<h1 align="center">Conheça nosso 'Dream Team' 🚀</h1>
<h2 align="left">Desenvolvedores_</h2>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    html {
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .card {
      background-color: #2d333b;
      border: 2px solid #444c56;
      border-radius: 10px;
      box-shadow: 2px 3px 20px #46608855;
      color: #adbac7;
      display: flex;
      flex-direction: column;
      max-width: 400px;
      height: 230px;
      font-weight: 400;
      padding: 14px;
    }

    p {
      background-color: #444c56;
      border-radius: 10px;
      height: 118px;
      padding: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    footer {
      align-items: center;
      display: flex;
      margin-top: 10px;
    }

    img.avatar {
      border-radius: 50%;
      margin-right: 10px;
      width: 50px;
    }

    .author {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-weight: 600;
    }

    .name {
      color: #adbac7;
    }

    .job {
      color: ghostwhite;
    }

    .job:after {
      content: '_';
    }

    img.uol {
      align-self: flex-end;
      margin-left: auto;
      margin-bottom: 10px;
      width: 30%;
    }
  </style>
</head>
  <body>
    <div class="wrapper">
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis eu mauris eget aliquam. Vivamus ut tristique quam, a convallis turpis. Phasellus sagittis auctor suscipit. Ut molestie pellentesque lectus eget hendrerit. Etiam arcu quam, faucibus quis scelerisque eget, tempus vitae ipsum. Phasellus faucibus ex in dictum bibendum. Pellentesque egestas, lorem ut posuere euismod, urna sapien pharetra ante, et mattis neque purus id orci. Proin scelerisque a leo sollicitudin faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et est mauris. Phasellus laoreet, dui vitae congue sagittis, velit felis pulvinar neque, at suscipit neque dolor non enim.
        </p>
        <footer>
          <img class="avatar" src="https://i.imgur.com/b0R7Dye.jpg" alt="avatar" />
          <div class="author">
            <span class="name">John Doe</span>
            <span class="job">Backend Developer</span>
          </div>
          <img class="uol" src="https://i.imgur.com/8OjyFNE.png" alt="uol" />
        </footer>
      </div>
  </body>
</html>
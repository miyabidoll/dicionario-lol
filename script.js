function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Irelia",

      imagem: "https://i.postimg.cc/zBWFyYcT/irelia.png",

      descricao:
        "Tranquila como o mar, furiosa como a tempestade. Irelia, uma valente defensora de Ionia, foi treinada nas antigas danças de seu povo e adaptou sua arte à guerra. Usando movimentos graciosos para levitar uma série de lâminas fatais, a Dançarina das Lâminas corta qualquer um que se atreva a brincar de conquistador.",
      citacao: "Eu sou a calmaria... e também a tempestade.",
    },

    bio02: {
      nome: "Teemo",

      imagem: "https://i.postimg.cc/kXSqD6TZ/teemo.png",

      descricao:
        "Indiferente até aos obstáculos mais perigosos e ameaçadores, Teemo vasculha o mundo com infinito entusiasmo e animação. Um yordle com uma inabalável moral que se orgulha de seguir o Código dos Escoteiros de Bandópolis, às vezes com tanta dedicação que não se toca das possíveis consequências de suas ações.",
      citacao: "Nunca subestime o poder do código dos escoteiros!",
    },

    bio03: {
      nome: "Ashe",

      imagem: "https://i.postimg.cc/YCMrVN77/ashe.png",

      descricao:
        "A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro..",
      citacao: "Não confunda piedade com fraqueza.",
    },

    bio04: {
      nome: "Lulu",

      imagem: "https://i.postimg.cc/K801DpMw/lulu.png",

      descricao:
        "A maga yordle Lulu é conhecida por conjurar ilusões de sonhos e criaturas fantasiosas enquanto vaga por Runeterra com seu silfo companheiro, Pix. Lulu transforma a realidade por capricho, distorcendo o que ela vê como restrições desse banal reino físico.",
      citacao: "Nunca olhe diretamente para uma tulipa...",
    },

    bio05: {
      nome: "Sona",

      imagem: "https://i.postimg.cc/hvn4BVmV/sona.png",

      descricao:
        "Sona é um dos maiores prodígios em etwahl de cordas em Demacia, falando somente através de seus acordes graciosos e de suas árias vibrantes. Seu comportamento refinado cativou os nobres, apesar de muitos suspeitarem que suas melodias fascinantes realmente emanem magia, um tabu em Demacia.",

      citacao: "A ordem através da música.",
    },

    bio06: {
      nome: "Soraka",

      imagem: "https://i.postimg.cc/x89Q7nrR/soraka.png",

      descricao:
        "Uma andarilha vinda de dimensões celestiais além do Monte Targon, Soraka desistiu de sua imortalidade para proteger as raças mortais de seus instintos mais violentos. Ela pretende espalhar as virtudes da compaixão e da misericórdia a todos que encontra, curando até mesmo aqueles que desejam seu mal.",
      citacao: "Este é o meu caminho, pela paz do espírito.",
    },
  };

  var content = document.getElementById("content");

  for (var bio in biografias) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      biografias[bio].nome +
      "</summary>" +
      "<p>" +
      biografias[bio].descricao +
      "</p>" +
      "<blockquote><q>" +
      biografias[bio].citacao +
      "</q></blockquote>" +
      "</details>" +
      "</div>";
  }
}

carregaDicionario();

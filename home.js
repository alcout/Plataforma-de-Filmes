
function Pesquisar() {

    var texto = $('#pesquisaId').val();
    var listaFilmes = $('.labelFilme');

    for (let index = 0; index < listaFilmes.length; index++) {

        var filme = listaFilmes[index]
        var contem = filme.innerText.toLowerCase().includes(texto.toLowerCase());
        $(filme.parentNode).removeClass("escondeFilme");

        if (!contem) {
            $(filme.parentNode).addClass("escondeFilme");
        }
    }
}

function Detalhes(filme) {


    console.log(filme);
    var descricao = "";
    var imagem = "";
    var nome = "";

    switch (filme) {
        case 1:
            nome = "Encanto";
            descricao = "A história acompanha Mirabel e sua família, os Madrigal, que moram em uma casa mágica no meio das montanhas da Colômbia. A família recebeu um milagre, o que faz com que cada um dos integrantes receba um dom único, com exceção de Mirabel.";
            imagem = "imagens/encanto.webp";
            break;
        case 2:
            nome = "Mundo estranho";
            descricao = "Apresenta uma lendária família de exploradores, os Clades, enquanto eles tentam navegar por uma terra inexplorada e traiçoeira ao lado de uma equipe heterogênea, incluindo uma bolha travessa, um cachorro de três patas e uma enorme quantidade de criaturas famintas.";
            imagem = "imagens/mundoestranho.webp";
            break;
        case 3:
            nome = "Mortal";
            descricao = "Em Mortal, acompanhamos Eric (Nat Wolff), um jovem que descobre que tem poderes divinos, baseados na antiga mitologia nórdica. Certo dia, enquanto se escondia no deserto da Noruega, ele acaba acidentalmente matando um homem. Ao ser preso e interrogado pelas autoridades, Eric conhece Christine (Iben Akerlie), uma psicóloga que tenta descobrir o que aconteceu. Quando a embaixada norte-americana aparece querendo a extradição do prisioneiro, Christine ajuda Eric a escapar. Em fuga, com as autoridades norueguesas e americanas atrás deles, o jovem começa a descobrir a verdadeira extensão dos seus poderes.";
            imagem = "imagens/mortal.jpg";
            break;
        case 4:
            nome = "Pantera negra"
            descricao = "Pantera Negra: Wakanda Para Sempre é a continuação do longa Pantera Negra, da Marvel, dirigido por Ryan Coogler e produzido por Kevin Feige. No filme, o mundo de Wakanda se expande. Após a morte do ator de T'Challa (Chadwick Boseman) o foco de Wakanda Para Sempre são os personagens em volta do Pantera Negra. Rainha Ramonda (Angela Bassett), Shuri (Letitia Wright), M'Baku (Winston Duke), Okoye (Danai Gurira) e as Dora Milage lutam para proteger a nação fragilizada de outros países após a morte de T'Challa. Enquanto o povo de Wakanda se esforça para continuar em frente neste novo capítulo, a família e amigos do falecido rei precisam se unir com a ajuda de Nakia (Lupita Nyong'o), integrante dos Cães de Guerra, e Everett Ross (Martin Freeman). Em meio a isso tudo, Wakanda ainda terá que aprender a conviver com a nação debaixo d'água, Talokan, e seu rei Namor (Tenoch Huerta).";
            imagem = "imagens/panteranegra.jpg"
            break;
        case 5:
            nome = "A última festa";
            descricao = "Na festa de formatura de estudantes, as histórias dos jovens acabam se cruzando, nem sempre tendo o resultado mais esperado, equanto se preparam para seguir uma nova etapa da vida.";
            imagem = "imagens/aultimafesta.png"
            break;
        case 6:
            nome = "Ron bugado";
            descricao = "Ron Bugado conta a história do jovem Barney, um menino de onze anos que tem dificuldade de fazer novos amigos, e seu companheiro Ron, uma inteligência artificial de alta tecnologia que anda, fala e é o 'melhor amigo fora da caixa' de Barney. Mas quando Ron começa a ter seu funcionamento comprometido, os dois saem em uma aventura repleta de ação, onde a amizade entre os dois se mostra verdadeira.";
            imagem = "imagens/ronbugado.webp";
            break;
        case 7:
            nome = "Intocáveis";
            descricao = "Um aristocrata fica tetraplégico após um grave acidente, contratando um assistente que não tem a menor experiência em cuidar de pessoas. Aos poucos, a amizade entre os dois vai se estabelecendo, criando um lindo vínculo.";
            imagem = "imagens/intocaveis.jpg"
            break;
        case 8:
            nome = "Thor: amor e trovão";
            descricao = "Após os acontecimentos de Ultimato, Thor ansiando por um propósito, retorna a Nova Asgard e sua aposentadoria é interrompida por um assassino galáctico conhecido como Gorr (Christian Bale), o Carniceiro de Deus, que busca a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda da Rainha Valquíria (Tessa Thompson), Korg (Taika Waititi) e Jane Foster (Natalie Portman), sua ex-namorada, que - para surpresa de Thor - inexplicavelmente consegue empunhar seu martelo mágico, Mjolnir, o que imbuiu Jane com o poder de Thor. Juntos, eles embarcam em uma aventura cósmica para descobrir o mistério da vingança do God Butcher e detê-lo antes que seja tarde demais.";
            imagem = "imagens/thor.webp"
            break;
        case 9:
            nome = "Avatar"
            descricao = "Em Avatar: O Caminho da Água, sequência de Avatar (2009), após dez anos da primeira batalha de Pandora entre os Na'vi e os humanos, Jake Sully (Sam Worthington) vive pacificamente com sua família e sua tribo. Ele e Ney'tiri formaram uma família e estão fazendo de tudo para ficarem juntos, devido a problemas conjugais e papéis que cada um tem que exercer dentro da tribo. No entanto, eles devem sair de casa e explorar as regiões de Pandora, indo para o mar e fazendo pactos com outros Na'vi da região. Quando uma antiga ameaça ressurge, Jake deve travar uma guerra difícil contra os humanos novamente. Mesmo com dificuldade, Jake acaba fazendo novos aliados - alguns dos quais já vivem entre os Na'vi e outros com novos avatares. Mesmo com uma guerra em curso, Jake e Ney'tiri terão que fazer de tudo para ficarem juntos e cuidar da família e de sua tribo.";
            imagem = "imagens/avatar.jpg"
            break;
        case 10:
            nome = "Divertidamente"
            descricao = "Riley é uma garota divertida de 11 anos de idade, que deve enfrentar mudanças importantes em sua vida quando seus pais decidem deixar a sua cidade natal, no estado de Minnesota, para viver em San Francisco. Dentro do cérebro de Riley, convivem várias emoções diferentes, como a Alegria, o Medo, a Raiva, o Nojinho e a Tristeza. A líder deles é Alegria, que se esforça bastante para fazer com que a vida de Riley seja sempre feliz. Entretanto, uma confusão na sala de controle faz com que ela e Tristeza sejam expelidas para fora do local. Agora, elas precisam percorrer as várias ilhas existentes nos pensamentos de Riley para que possam retornar à sala de controle - e, enquanto isto não acontece, a vida da garota muda radicalmente.";
            imagem = "imagens/divertidamente.webp"
            break;
        case 11:
            nome = "Uma quedinha de natal"
            descricao = "Depois de sofrer um acidente e perder a memória, uma herdeira rica se vê sob os cuidados de um dono de uma pousada e sua filha nos dias que antecedem o Natal.";
            imagem = "imagens/umaquedinhadenatal.jpg"
            break;
         case 12:
            nome = "Dois irmãos"
            descricao = "Na animação da Disney, Dois Irmãos: Uma Jornada Fantástica, em um local onde as coisas fantásticas parecem ficar cada vez mais distantes de tudo, dois irmãos elfos adolescentes embarcam em uma extraordinária jornada para tentar redescobrir a magia do mundo ao seu redor.";
            imagem = "imagens/doisirmaos.webp"
            break;

        default:
            break;
    }

    Swal.fire({
        title: '<strong><u>' + nome + '</u></strong>',
        html:
            '<img src="' + imagem + '" class="img-fluid" alt="...">' + descricao,
        showCloseButton: true,
        showConfirmButton: false,
        showCancelButton: false,
        focusConfirm: false,
        allowOutsideClick: false
    })
}
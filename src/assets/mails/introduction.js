module.exports = {
  received: [
    {
      id: "1",
      title: "Nouvelle Mission",
      content: `
        Bonjour inspecteur Lacroix,
        <br>
        Bon retour, j'espère que les vacances se sont bien passées.
        <br>
        On n'a pas chômé de notre côté, et nous avons déjà une affaire à vous confier.
        <br>
        <br>
        Voici le topo :
        <br>
        Amélie de Saint-Gil, héritière et orpheline d'une riche famille d'entrepreneurs, vient de disparaître de la circulation. On soupçonne très fortement l'enlèvement, mais nous n'avons pas encore reçu la demande de rançon.
        <br>
        Nous aimerions beaucoup pouvoir remettre la main dessus avant que cela n'arrive.
        <br>
        Nous avons réuni les six domestiques qui travaillaient encore au manoir au moment où Amélie a disparu pour les interroger.
        <br>
        Le manoir disposait d'un système de discussion en ligne utilisé par tous ses résidents dans lequel sont enregistrés de nombreuses conversations.
        <br>
        Pendant que nous interrogeons le personnel, votre travail consistera à examiner l'historique des conversations afin de les recroiser avec les témoignages.
        <br>
        <br>
        Bonne chance,
        <br>
        Commissaire Matthieu
        <br>
        <br>
        PS : le QG vous a collé un stagiaire dans les pattes. Il s'appelle Gabriel Labannière, il devrait vous contacter bientôt pour se présenter. Il vous assistera lors de cette affaire.
      `,
      sender: { name: "Boss", email: "hugo.boss@police.com" },
      time: { hours: 2 }
    },
    {
      id: "2",
      title: "Petit déjeuner",
      content: "super mail de test",
      sender: { name: "Service", email: "service@custom.com" },
      time: { hours: 4 },
      seen: true
    },
    {
      id: "3",
      title: "Petit déjeuner",
      content: "super mail de test",
      sender: { name: "Boss", email: "email@custom.com" },
      time: { hours: 5 },
      seen: true
    }
  ],
  sent: [],
  spam: [
    {
      id: "1",
      title: "Enlarge your salary",
      content: "OMG you can enlarge your salary at : http://www.totally-legit-website.com",
      sender: { name: "Mr. Legal", email: "i-am-real-person@not-fake.com" },
      time: { month: 2, hours: 4 }
    }
  ],
  trash: []
};

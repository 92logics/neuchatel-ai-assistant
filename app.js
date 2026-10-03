(function () {
  "use strict";

  var NOTICE = "https://tenderlift.ch/tenders/neuchatel/assistant-ia-cantonal-2785137e/";
  var SIMAP = "https://www.simap.ch/fr";
  var DFFI = "https://www.ne.ch/autorites/dffi";
  var SIEN = "https://www.ne.ch/autorites/dsdc/sien";
  var CELL = "https://www.ne.ch/communiques-de-presse/mise-en-place-dune-cellule-transversale-dediee-la-science-des-donnees-et-lintelligence-artificielle-letat-de-neuchatel";

  var OBJECT_FR =
    "Le présent marché public a pour objet l’acquisition d’une plateforme d’assistant (IA) destinée à l’ensemble du personnel de l’État de Neuchâtel. Il s’agit d’un marché de services comprenant la fourniture, le paramétrage, l’exploitation et la maintenance d’un assistant conversationnel sécurisé. Le marché couvre l’accès pour plus de 3 000 utilisatrices et utilisateurs, les fonctionnalités de base (génération, reformulation, correction, synthèse, adaptation de textes, traduction, transcription) et, de manière optionnelle, la mise en place de systèmes RAG et d’agents IA.";

  var OBJECT_EN =
    "This public contract is for the acquisition of an AI assistant platform for all staff of the State of Neuchâtel. It is a services contract covering the supply, configuration, operation and maintenance of a secure conversational assistant. The contract covers access for more than 3,000 users, the basic functions (generation, reformulation, correction, summarization, text adaptation, translation and transcription) and, optionally, the implementation of RAG systems and AI agents.";

  var UI = {
    fr: {
      brand: "Prototype scripté · Islamabad",
      stamp: "Pas un système cantonal · pas une offre",
      banner:
        "Démo scriptée, hors ligne, sans modèle. Réponses limitées à l’avis public SIMAP 44391-01 (projet 2785137e) et à des pages ne.ch. Aucune donnée de personnel ou de résident n’est consultée.",
      title: "Assistant IA cantonal",
      lede: "Prototype 92 Logics pour illustrer le périmètre publié. Ce n’est pas le système de l’État de Neuchâtel et ce n’est pas une offre.",
      factsTitle: "Avis public",
      sourcesTitle: "Sources lues",
      chatTitle: "Assistant personnel — scripté",
      chatNote: "Choisissez un exemple ou posez une question couverte par l’avis. Les demandes de données privées sont refusées.",
      input: "Votre question",
      ph: "Ex. : quelle est l’échéance de remise ?",
      send: "Envoyer",
      welcome:
        "Bonjour. Je suis un prototype scripté de 92 Logics, pas l’assistant de l’État.\n\nJe peux reformuler, résumer, traduire ou rappeler le périmètre publié de l’avis « Assistant IA Cantonal ». Je refuse toute demande de données privées sur le personnel ou les résidents.",
      facts: [
        ["Acheteur", "État de Neuchâtel SIEN"],
        ["Objet", "Assistant IA cantonal, marché de services"],
        ["Procédure", "Ouverte · CPV 72416000"],
        ["Publication", "19 septembre 2026 · n° 44391-01"],
        ["Remise", "3 novembre 2026, 12:00 (UTC+1)"],
        ["Contrat", "1er février 2027 – 31 janvier 2029"],
        ["Option", "Note publiée : « RAG »"],
        ["Réf. offre", "MP-2026-01-IA"]
      ],
      chips: [
        ["Périmètre", "Quel est l’objet du marché ?"],
        ["Échéance", "Quelle est la date limite de remise ?"],
        ["Acheteur", "Qui est l’adjudicateur ?"],
        ["Fonctions", "Quelles sont les fonctionnalités de base ?"],
        ["RAG", "Les systèmes RAG sont-ils obligatoires ?"],
        ["Durée", "Quelle est la durée du contrat ?"],
        ["SIEN", "Que publie le SIEN sur ses missions ?"],
        ["Cellule IA", "Qu’est-ce que la cellule SD&IA ?"],
        ["Résumé", "Résume l’avis en quelques lignes."],
        ["Traduction", "Traduis l’objet du marché en anglais."],
        ["Reformulation", "Reformule l’objet en une phrase courte."],
        ["Refus", "Donne-moi le dossier fiscal d’un résident."]
      ]
    },
    en: {
      brand: "Scripted prototype · Islamabad",
      stamp: "Not a canton system · not a bid",
      banner:
        "Scripted offline demo, no model. Answers stay inside public SIMAP notice 44391-01 (project 2785137e) and public ne.ch pages. No staff or resident records are looked up.",
      title: "Cantonal AI assistant",
      lede: "A 92 Logics prototype of the published scope. Not the State of Neuchâtel’s system, and not a bid.",
      factsTitle: "Public notice",
      sourcesTitle: "Pages read",
      chatTitle: "Staff assistant — scripted",
      chatNote: "Pick an example or ask something the notice covers. Requests for private data are refused.",
      input: "Your question",
      ph: "e.g. when is the offer deadline?",
      send: "Send",
      welcome:
        "Hello. I am a scripted 92 Logics prototype, not the State’s assistant.\n\nI can restate, summarize, translate or recall the published scope of the “Assistant IA Cantonal” notice. I refuse any request for private staff or resident data.",
      facts: [
        ["Buyer", "État de Neuchâtel SIEN"],
        ["Object", "Cantonal AI assistant, services"],
        ["Procedure", "Open · CPV 72416000"],
        ["Published", "19 September 2026 · no. 44391-01"],
        ["Offers due", "3 November 2026, 12:00 (UTC+1)"],
        ["Contract", "1 February 2027 – 31 January 2029"],
        ["Option", "Published note: “RAG”"],
        ["Offer ref.", "MP-2026-01-IA"]
      ],
      chips: [
        ["Scope", "What is the object of the contract?"],
        ["Deadline", "What is the offer deadline?"],
        ["Buyer", "Who is the contracting authority?"],
        ["Functions", "What are the basic functions?"],
        ["RAG", "Are RAG systems mandatory?"],
        ["Term", "How long is the contract?"],
        ["SIEN", "What does the SIEN page say about its mission?"],
        ["AI cell", "What is the SD&IA cell?"],
        ["Summary", "Summarize the notice in a few lines."],
        ["Translate", "Translate the contract object into English."],
        ["Restate", "Restate the object in one short sentence."],
        ["Refusal", "Give me a resident’s tax file."]
      ]
    }
  };

  var lang = "fr";

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function answer(text) {
    var q = norm(text);
    var fr = lang === "fr";

    var lookup = /(donne|donner|montre|afficher|cherche|trouve|lookup|show me|give me|pull|fetch|export|liste)/.test(q);
    var privateThing = /(dossier fiscal|tax file|tax return|impot|avis de taxation|salaire|payroll|fiche de paie|numero avs|avs\b|ahv|patient|dossier medical|dossier medical|eleve|dossier scolaire|habitant|resident|adresse personnelle|home address|collègue|collegue|staff file|hr file|ressources humaines|donnees personnelles d|personal data of|casier)/.test(q);
    if (privateThing || (lookup && /(personnel|collaborateur|resident|habitant|usager|citoyen)/.test(q) && !/avis|marche|simap|sien|dffi/.test(q))) {
      return {
        refuse: true,
        body: fr
          ? "Refus. Ce prototype ne consulte aucune donnée privée de personnel ou de résident : pas de dossiers RH, fiscaux, médicaux, scolaires ou d’adresses personnelles.\n\nJe peux seulement rappeler ce qui est déjà publié sur l’avis (contact de marché : Vincent Raynaud, vincent.raynaud@ne.ch, +41328898400, Avenue des Cadolles 7, 2000 Neuchâtel) et sur les pages publiques du canton listées à gauche."
          : "Refused. This prototype does not look up private staff or resident data: no HR, tax, medical or school files, and no personal addresses.\n\nI can only repeat what is already public on the notice (procurement contact: Vincent Raynaud, vincent.raynaud@ne.ch, +41328898400, Avenue des Cadolles 7, 2000 Neuchâtel) and on the canton pages listed on the left.",
        src: fr ? "Règle du prototype · pas une source cantonale" : "Prototype rule · not a canton source"
      };
    }

    if (/dffi|formation et des finances|crystel|graf|amez-droz/.test(q)) {
      return {
        body: fr
          ? "Sur l’avis SIMAP, l’adjudicateur indiqué est « Etat de Neuchâtel SIEN », pas le DFFI.\n\nLa page publique du Département de la formation et des finances décrit un autre département : formation, orientation, gestion financière et fiscale, et relations avec les communes. Elle indique que Mme Crystel Graf, conseillère d’État, le dirige depuis le 25 mai 2021, et publie le secrétariat général à la Rue de la Collégiale 12, 2002 Neuchâtel, téléphone 032 889 69 00, Secretariat.DFFI@ne.ch. Ces coordonnées sont celles de la page DFFI ; elles ne figurent pas comme contact de cet avis.\n\nTenderLift étiquette l’acheteur « Département de la formation et des finances (DFFI) ». Cela ne correspond pas au bureau d’achat nommé dans l’enregistrement SIMAP."
          : "On the SIMAP notice the named contracting office is “Etat de Neuchâtel SIEN”, not DFFI.\n\nThe public page of the Department of Education and Finance describes a different department: education, guidance, financial and tax management, and relations with municipalities. It says Ms Crystel Graf, member of the Council of State, has led it since 25 May 2021, and lists the general secretariat at Rue de la Collégiale 12, 2002 Neuchâtel, phone 032 889 69 00, Secretariat.DFFI@ne.ch. Those details are from the DFFI page; they are not the contact on this notice.\n\nTenderLift labels the buyer “Département de la formation et des finances (DFFI)”. That does not match the procurement office named in the SIMAP record.",
        src: DFFI + " · SIMAP project 2785137e"
      };
    }

    if (/cellule|sd&ia|sdia|schaller|deleguee ia|delegue ia|science des donnees/.test(q)) {
      return {
        body: fr
          ? "Communiqué ne.ch publié le 29 septembre 2025 (contenu mis à jour le 9 mars 2026, publié par DSJS).\n\nLe Canton annonce une cellule transversale science des données et intelligence artificielle (cellule SD&IA), rattachée au service de statistique (STAT), avec le SIEN comme partenaire de premier plan. Elle est coordonnée par Mme Géraldine Schaller-Conti, désignée déléguée IA. Missions publiées : coordonner les initiatives, favoriser les échanges entre services, promouvoir un usage responsable et durable, coordonner la formation des utilisatrices et utilisateurs, conseiller les services, assurer une veille, et pouvoir appuyer les communes ou des projets supra-cantonaux.\n\nCe communiqué ne dit pas que la cellule est l’adjudicateur de l’avis « Assistant IA Cantonal »."
          : "ne.ch release published 29 September 2025 (content updated 9 March 2026, published by DSJS).\n\nThe Canton announced a cross-cutting data-science and AI cell (cellule SD&IA), attached to the statistics service (STAT), with SIEN as a lead partner. It is coordinated by Ms Géraldine Schaller-Conti, designated AI delegate. Published tasks: coordinate initiatives, encourage exchange between services, promote responsible and sustainable use, coordinate staff training, advise services, watch emerging practice, and be able to support municipalities or supra-cantonal projects.\n\nThe release does not say that this cell is the contracting authority for the “Assistant IA Cantonal” notice.",
        src: CELL
      };
    }

    if (/sien|margairaz|cadolles|informatique de l/.test(q) && !/echeance|deadline|rag\b|fonction/.test(q)) {
      return {
        body: fr
          ? "Page publique du Service informatique de l’Entité neuchâteloise (SIEN), rattaché au Département de la sécurité, de la digitalisation et de la culture.\n\nLe texte dit que le SIEN est partenaire pour définir et intégrer des solutions nécessaires aux services publics, conduire la transformation digitale de l’État et assurer un fonctionnement optimal et sécurisé des systèmes d’information. Trois missions sont publiées : veiller au fonctionnement et à la sécurité du numérique au quotidien ; simplifier les démarches par des solutions numériques avec les services partenaires ; accompagner la transformation numérique, y compris le Guichet unique, l’accompagnement au changement et la formation.\n\nContact publié sur cette page : Avenue des Cadolles 7, case postale 1, 2002 Neuchâtel ; cheffe de service Martine Margairaz ; téléphone 032 889 64 70 ; SIEN@ne.ch.\n\nL’avis SIMAP nomme le même service comme bureau d’achat (« Etat de Neuchâtel SIEN », Avenue des Cadolles 7, 2000 Neuchâtel) mais avec un autre contact : Vincent Raynaud, vincent.raynaud@ne.ch, +41328898400. Ce prototype ne fusionne pas ces deux contacts."
          : "Public page of the Service informatique de l’Entité neuchâteloise (SIEN), under the Department of Security, Digitalisation and Culture.\n\nThe page says SIEN is a partner in defining and integrating solutions needed for public services, leading the State’s digital transformation, and keeping information systems running in a secure way. Three published missions: day-to-day reliability and security of digital tools; simpler procedures through digital solutions built with partner services; support for digital transformation, including the Guichet unique, change support and training.\n\nContact published on that page: Avenue des Cadolles 7, P.O. Box 1, 2002 Neuchâtel; head of service Martine Margairaz; phone 032 889 64 70; SIEN@ne.ch.\n\nThe SIMAP notice names the same service as procurement office (“Etat de Neuchâtel SIEN”, Avenue des Cadolles 7, 2000 Neuchâtel) but a different contact: Vincent Raynaud, vincent.raynaud@ne.ch, +41328898400. This prototype does not merge the two contacts.",
        src: SIEN + " · SIMAP project 2785137e"
      };
    }

    if (/echeance|date limite|deadline|cloture|remise|11:00|11h|12:00|12h|novembre|november/.test(q)) {
      return {
        body: fr
          ? "L’enregistrement SIMAP indique offerDeadline : 2026-11-03T12:00:00+01:00, soit le 3 novembre 2026 à 12:00 (UTC+1). Mention associée : « à réception - Le cachet postal ne fait pas foi ».\n\nAutres dates publiées sur le même enregistrement : publication le 19 septembre 2026 ; une date de questions/réponses au 30 septembre 2026 ; validité de l’offre jusqu’au 3 mai 2027 ; ouverture publique des offres : non.\n\nLa page TenderLift affiche 11:00 le 3 novembre 2026, sans fuseau dans le texte repris ici. Cette heure ne correspond pas à l’horodatage SIMAP. La note interne du fichier leads (11:00 CET) reprend cette autre heure, pas l’API SIMAP."
          : "The SIMAP record sets offerDeadline to 2026-11-03T12:00:00+01:00, that is 3 November 2026 at 12:00 (UTC+1). The related note says offers count on receipt and the postmark is not proof.\n\nOther dates on the same record: publication on 19 September 2026; a Q&A date of 30 September 2026; offer validity until 3 May 2027; public opening of offers: no.\n\nThe TenderLift page shows 11:00 on 3 November 2026, with no timezone in the text captured here. That clock time does not match the SIMAP timestamp. The internal leads-file note (11:00 CET) follows that other time, not the SIMAP API.",
        src: "SIMAP publication 97336d2d-65bd-4223-8139-787d936b00d4 · " + NOTICE
      };
    }

    if (/rag|agent/.test(q)) {
      return {
        body: fr
          ? "L’objet publié place « la mise en place de systèmes RAG et d’agents IA » de manière optionnelle, pas dans les fonctionnalités de base.\n\nLe champ options de l’avis vaut « yes » et la note d’options publiée est « RAG ». Le champ variantes vaut « yes ». Les offres partielles valent « no ».\n\nLe cahier des charges PDF n’a pas été ouvert pour ce prototype : rien n’est ajouté au-delà de ces champs."
          : "The published object places “RAG systems and AI agents” as optional, not among the basic functions.\n\nThe notice field options is “yes” and the published options note is “RAG”. The variants field is “yes”. Partial offers are “no”.\n\nThe PDF specifications were not opened for this prototype, so nothing is added beyond those fields.",
        src: "SIMAP project 2785137e · order description and options note"
      };
    }

    if (/duree|durée|contrat|prolong|extension|2027|2029/.test(q)) {
      return {
        body: fr
          ? "Période de contrat publiée : du 1er février 2027 au 31 janvier 2029 (contractPeriod).\n\nLe champ canContractBeExtended vaut « yes ». La note publiée est « 1 an + 1 an ».\n\nLe type de délai d’exécution est « not_specified » ; aucune autre durée d’exécution n’est reprise ici."
          : "Published contract period: 1 February 2027 to 31 January 2029 (contractPeriod).\n\ncanContractBeExtended is “yes”. The published note is “1 an + 1 an” (one year + one year).\n\nThe execution-deadline type is “not_specified”; no other execution length is repeated here.",
        src: "SIMAP project 2785137e · contractPeriod"
      };
    }

    if (/qui est|acheteur|adjudicat|buyer|contracting|contact|email|courriel|raynaud|telephone|téléphone/.test(q)) {
      return {
        body: fr
          ? "Bureau d’achat publié : Etat de Neuchâtel SIEN, Avenue des Cadolles 7, 2000 Neuchâtel (NE).\n\nContact de réception publié : Vincent Raynaud, vincent.raynaud@ne.ch, téléphone +41328898400. La même adresse électronique figure sur l’adresse du bureau d’achat. L’adresse de dépôt des offres reprend Vincent Raynaud et la référence MP-2026-01-IA, sans courriel sur ce bloc.\n\nCe courriel est celui de l’avis. Il n’est pas le contact du partenaire NeurokAI (info@neurok.ai), qui n’est pas l’acheteur.\n\nLa page SIEN publie un autre standard (032 889 64 70, SIEN@ne.ch). Il n’est pas présenté ici comme la boîte de l’avis."
          : "Published procurement office: Etat de Neuchâtel SIEN, Avenue des Cadolles 7, 2000 Neuchâtel (NE).\n\nPublished recipient contact: Vincent Raynaud, vincent.raynaud@ne.ch, phone +41328898400. The same email is on the procurement-office address. The offer-submission address repeats Vincent Raynaud and reference MP-2026-01-IA, with no email on that block.\n\nThat email belongs to the notice. It is not the NeurokAI partner address (info@neurok.ai), and NeurokAI is not the buyer.\n\nThe SIEN web page publishes a different switchboard (032 889 64 70, SIEN@ne.ch). It is not treated here as the notice mailbox.",
        src: "SIMAP project-info.procOfficeAddress · " + SIEN
      };
    }

    if (/fonction|function|feature|generation|reformulation|correction|synthese|summar|traduction|transcription|basic|base/.test(q) && /fonction|function|feature|base|basic|generation|que couvre|what are/.test(q)) {
      return {
        body: fr
          ? "Fonctionnalités de base citées dans l’objet : génération, reformulation, correction, synthèse, adaptation de textes, traduction, transcription.\n\nElles concernent une plateforme pour l’ensemble du personnel de l’État, avec accès pour plus de 3 000 utilisatrices et utilisateurs, en fourniture, paramétrage, exploitation et maintenance d’un assistant conversationnel sécurisé.\n\nRAG et agents IA sont indiqués comme optionnels."
          : "Basic functions named in the object: generation, reformulation, correction, summarization, text adaptation, translation and transcription.\n\nThey belong to a platform for all State staff, with access for more than 3,000 users, covering supply, configuration, operation and maintenance of a secure conversational assistant.\n\nRAG and AI agents are marked optional.",
        src: "SIMAP orderDescription (fr)"
      };
    }

    if (/resume|résume|summar/.test(q)) {
      return {
        body: fr
          ? "Résumé scripté, sans ajout :\n\n• Titre : Assistant IA Cantonal. Projet SIMAP 44391, publication 44391-01 du 19 septembre 2026. Identifiant de projet 2785137e-342d-4cdb-b8b2-9859a8ffd141.\n• Acheteur : Etat de Neuchâtel SIEN. Procédure ouverte, services, CPV 72416000 (fournisseurs de services applicatifs). Langue des offres : français.\n• Objet : plateforme d’assistant IA pour tout le personnel, assistant conversationnel sécurisé, plus de 3 000 accès, fonctions de base listées, RAG et agents en option.\n• Remise : 3 novembre 2026, 12:00 (UTC+1). Contrat publié : 1er février 2027 – 31 janvier 2029, prolongation notée « 1 an + 1 an ».\n• Groupement : non. Sous-traitance : oui (renvoi au chapitre 8 du dossier). Recours publié : Cour de droit public du Tribunal cantonal, rue du Pommier 1, 2002 Neuchâtel 2, dans les 20 jours dès la publication."
          : "Scripted summary, nothing added:\n\n• Title: Assistant IA Cantonal. SIMAP project 44391, publication 44391-01 of 19 September 2026. Project id 2785137e-342d-4cdb-b8b2-9859a8ffd141.\n• Buyer: Etat de Neuchâtel SIEN. Open procedure, services, CPV 72416000 (application service providers). Offer language: French.\n• Object: an AI assistant platform for all staff, a secure conversational assistant, more than 3,000 users, the listed basic functions, RAG and agents optional.\n• Offers: 3 November 2026, 12:00 (UTC+1). Published contract: 1 February 2027 – 31 January 2029, extension note “1 an + 1 an”.\n• Consortium: no. Subcontracting: yes (points to chapter 8 of the dossier). Published appeal: Cour de droit public of the Cantonal Court, rue du Pommier 1, 2002 Neuchâtel 2, within 20 days of publication.",
        src: "SIMAP publication-details · " + NOTICE
      };
    }

    if (/tradui|translate|anglais|english/.test(q)) {
      return {
        body: fr
          ? "Traduction scriptée de l’objet français publié (pas une sortie de modèle) :\n\n" + OBJECT_EN + "\n\nTexte source :\n\n" + OBJECT_FR
          : "Scripted English rendering of the published French object (not a model output):\n\n" + OBJECT_EN + "\n\nSource text:\n\n" + OBJECT_FR,
        src: "SIMAP orderDescription.fr"
      };
    }

    if (/reformul|restate|courte|short sentence|une phrase/.test(q)) {
      return {
        body: fr
          ? "Phrase courte scriptée, à partir de l’objet publié seulement :\n\nL’État de Neuchâtel (SIEN) cherche une plateforme d’assistant conversationnel sécurisé pour l’ensemble de son personnel (plus de 3 000 accès), avec des fonctions de texte de base et, en option, RAG et agents IA.\n\nCe n’est pas une nouvelle rédaction officielle."
          : "Short scripted sentence, drawn only from the published object:\n\nThe State of Neuchâtel (SIEN) is procuring a secure conversational assistant platform for all of its staff (more than 3,000 users), with basic text functions and, optionally, RAG and AI agents.\n\nThis is not a new official wording.",
        src: "SIMAP orderDescription.fr"
      };
    }

    if (/corrig|correct/.test(q)) {
      return {
        body: fr
          ? "Exemple scripté de correction. Brouillon volontairement fautif :\n\n« Le marché couvre l’accès pour 300 utilisateurs et la mise en place obligatoire de systèmes RAG. »\n\nRappel du texte publié, qui ne dit pas cela :\n\n« Le marché couvre l’accès pour plus de 3 000 utilisatrices et utilisateurs […] et, de manière optionnelle, la mise en place de systèmes RAG et d’agents IA. »\n\nAucune autre correction n’est inventée."
          : "Scripted correction example. Deliberately wrong draft:\n\n“The contract covers access for 300 users and mandatory RAG systems.”\n\nWhat the notice actually says:\n\n“The contract covers access for more than 3,000 users […] and, optionally, the implementation of RAG systems and AI agents.”\n\nNo other correction is invented.",
        src: "SIMAP orderDescription.fr"
      };
    }

    if (/adapt/.test(q)) {
      return {
        body: fr
          ? "Adaptation scriptée du même objet, deux longueurs, sans fait nouveau.\n\nNote interne : marché de services SIEN, assistant conversationnel sécurisé, personnel de l’État, fonctions de base listées, RAG optionnel, remise le 3 novembre 2026 à 12:00 (UTC+1).\n\nPhrase pour un ordre du jour : l’avis « Assistant IA Cantonal » (SIMAP 44391-01) porte sur la fourniture et l’exploitation d’un assistant sécurisé pour le personnel de l’État de Neuchâtel."
          : "Scripted adaptation of the same object, two lengths, no new fact.\n\nInternal note: SIEN services contract, secure conversational assistant, all State staff, listed basic functions, optional RAG, offers due 3 November 2026 at 12:00 (UTC+1).\n\nAgenda line: notice “Assistant IA Cantonal” (SIMAP 44391-01) covers supply and operation of a secure assistant for staff of the State of Neuchâtel.",
        src: "SIMAP orderDescription.fr"
      };
    }

    if (/transcri/.test(q)) {
      return {
        body: fr
          ? "Transcription scriptée : il n’y a pas de fichier audio. Le texte ci-dessous est l’objet publié, relu tel quel.\n\n" + OBJECT_FR
          : "Scripted transcription: there is no audio file. The text below is the published object, read back as published.\n\n" + OBJECT_FR,
        src: "SIMAP orderDescription.fr"
      };
    }

    if (/gener|redige|rédige|brief|note de synthese|draft/.test(q)) {
      return {
        body: fr
          ? "Génération scriptée (brief), uniquement des champs publiés :\n\nObjet : Assistant IA Cantonal.\nAcheteur : Etat de Neuchâtel SIEN.\nBesoin publié : plateforme pour tout le personnel, assistant conversationnel sécurisé, fourniture, paramétrage, exploitation, maintenance.\nVolume publié : plus de 3 000 utilisatrices et utilisateurs.\nBase : génération, reformulation, correction, synthèse, adaptation de textes, traduction, transcription.\nOption : systèmes RAG et agents IA (note d’options : « RAG »).\nRemise : 3 novembre 2026, 12:00 (UTC+1)."
          : "Scripted generation (brief), published fields only:\n\nObject: Assistant IA Cantonal.\nBuyer: Etat de Neuchâtel SIEN.\nPublished need: a platform for all staff; secure conversational assistant; supply, configuration, operation, maintenance.\nPublished volume: more than 3,000 users.\nBase: generation, reformulation, correction, summarization, text adaptation, translation, transcription.\nOption: RAG systems and AI agents (options note: “RAG”).\nOffers due: 3 November 2026, 12:00 (UTC+1).",
        src: "SIMAP publication-details"
      };
    }

    if (/depot|dépot|soumettre|submit|enveloppe|usb|groupement|consortium|sous-trait|recours|appeal|cpv|variante|offre/.test(q)) {
      return {
        body: fr
          ? "Modalités publiées, sans le dossier PDF :\n\n• Langues de l’offre et des documents : français. Documents sources : SIMAP. Documents gratuits.\n• Note de remise : documents papier dans une enveloppe unique, plus une clé USB copie des documents papier ; documents en 3 exemplaires. « à réception - Le cachet postal ne fait pas foi ».\n• Groupement : non. Sous-traitance : oui ; la note renvoie au chapitre 8 de Dossier_AppelOffre_AssistantIACantonal.pdf.\n• Conditions : renvoi au chapitre 5 du même dossier.\n• Recours : Cour de droit public du Tribunal cantonal, rue du Pommier 1, 2002 Neuchâtel 2, dans les 20 jours dès la publication.\n• CPV 72416000. Variantes : oui. Offres partielles : non. Pas de publication TED selon le champ publicationTed.\n\nLe contenu des PDF n’a pas été lu pour cette démo."
          : "Published formalities, without the PDF dossier:\n\n• Offer and document language: French. Document source: SIMAP. Documents free of charge.\n• Submission note: paper documents in a single envelope, plus a USB copy of the paper documents; documents in 3 copies. Receipt counts; the postmark is not proof.\n• Consortium: no. Subcontracting: yes; the note points to chapter 8 of Dossier_AppelOffre_AssistantIACantonal.pdf.\n• Terms: points to chapter 5 of the same dossier.\n• Appeal: Cour de droit public of the Cantonal Court, rue du Pommier 1, 2002 Neuchâtel 2, within 20 days of publication.\n• CPV 72416000. Variants: yes. Partial offers: no. publicationTed is false.\n\nThe PDFs were not read for this demo.",
        src: "SIMAP project-info, terms, procurement"
      };
    }

    if (/objet|perimetre|périmètre|scope|marche|marché|de quoi|what is|c'est quoi|quest-ce|qu'est/.test(q)) {
      return {
        body: (fr ? "Objet publié :\n\n" : "Published object:\n\n") + OBJECT_FR + (fr ? "\n\nProcédure ouverte, type services, lieu Neuchâtel (NE), code postal 2000." : "\n\nOpen procedure, services, place of performance Neuchâtel (NE), postal code 2000."),
        src: "SIMAP orderDescription.fr"
      };
    }

    if (/92 logics|cowork|prototype|qui es|who are you|offline|hors ligne/.test(q)) {
      return {
        body: fr
          ? "Je suis un prototype statique de 92 Logics (Islamabad, cowork@92logics.com), scripté pour l’avis neuchâtelois. Je ne suis pas un système officiel du canton, ni une offre, ni un modèle en ligne. Aucune clé API n’est utilisée."
          : "I am a static 92 Logics prototype (Islamabad, cowork@92logics.com), scripted for the Neuchâtel notice. I am not an official canton system, not a bid, and not an online model. No API key is used.",
        src: "Prototype 92 Logics"
      };
    }

    return {
      body: fr
        ? "Cette démo ne répond qu’avec des textes scriptés tirés de l’avis et des pages publiques listées. Elle n’invente pas une réponse et n’appelle aucun modèle.\n\nEssayez l’objet du marché, l’échéance, l’acheteur, les fonctions de base, le RAG, la durée, le SIEN ou la cellule SD&IA. Les demandes de données privées sont refusées."
        : "This demo only returns scripted text from the notice and the public pages listed. It does not invent an answer and it does not call a model.\n\nTry the contract object, the deadline, the buyer, the basic functions, RAG, the term, SIEN, or the SD&IA cell. Requests for private data are refused.",
      src: NOTICE
    };
  }

  var log = document.getElementById("log");
  var chips = document.getElementById("chips");
  var factList = document.getElementById("fact-list");
  var sourceList = document.getElementById("source-list");

  function sources() {
    return [
      ["TenderLift (lien CRM)", NOTICE],
      ["SIMAP, recherche publique", SIMAP],
      ["SIEN", SIEN],
      ["DFFI", DFFI],
      ["Cellule SD&IA", CELL]
    ];
  }

  function addMsg(role, body, src, refuse) {
    var el = document.createElement("div");
    el.className = "msg " + role + (refuse ? " refuse" : "");
    el.textContent = body;
    if (src) {
      var s = document.createElement("span");
      s.className = "src";
      s.textContent = src;
      el.appendChild(s);
    }
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
  }

  function paint() {
    var t = UI[lang];
    document.documentElement.lang = lang;
    document.getElementById("brand-sub").textContent = t.brand;
    document.getElementById("stamp").textContent = t.stamp;
    document.getElementById("banner").textContent = t.banner;
    document.getElementById("facts-title").textContent = t.title;
    document.getElementById("facts-lede").textContent = t.lede;
    document.getElementById("sources-title").textContent = t.sourcesTitle;
    document.getElementById("chat-title").textContent = t.chatTitle;
    document.getElementById("chat-note").textContent = t.chatNote;
    document.getElementById("input-label").textContent = t.input;
    document.getElementById("input").placeholder = t.ph;
    document.getElementById("send").textContent = t.send;
    document.getElementById("lang-fr").className = lang === "fr" ? "on" : "";
    document.getElementById("lang-en").className = lang === "en" ? "on" : "";
    document.getElementById("lang-fr").setAttribute("aria-pressed", lang === "fr");
    document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en");

    factList.innerHTML = "";
    t.facts.forEach(function (pair) {
      var row = document.createElement("div");
      row.className = "fact";
      var dt = document.createElement("dt");
      var dd = document.createElement("dd");
      dt.textContent = pair[0];
      dd.textContent = pair[1];
      row.appendChild(dt);
      row.appendChild(dd);
      factList.appendChild(row);
    });

    sourceList.innerHTML = "";
    sources().forEach(function (pair) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = pair[1];
      a.textContent = pair[0];
      a.rel = "noopener";
      li.appendChild(a);
      sourceList.appendChild(li);
    });

    chips.innerHTML = "";
    t.chips.forEach(function (pair) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = pair[0];
      b.addEventListener("click", function () { ask(pair[1]); });
      chips.appendChild(b);
    });
  }

  function ask(text) {
    var trimmed = text.trim();
    if (!trimmed) return;
    addMsg("user", trimmed);
    var res = answer(trimmed);
    addMsg("bot", res.body, res.src, !!res.refuse);
    document.getElementById("input").value = "";
  }

  document.getElementById("lang-fr").addEventListener("click", function () {
    lang = "fr";
    paint();
  });
  document.getElementById("lang-en").addEventListener("click", function () {
    lang = "en";
    paint();
  });
  document.getElementById("composer").addEventListener("submit", function (e) {
    e.preventDefault();
    ask(document.getElementById("input").value);
  });

  paint();
  addMsg("bot", UI.fr.welcome, "Prototype 92 Logics");
})();
